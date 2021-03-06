/**
 * Broadcast server using websockets and express.
 */
"use strict";

const port = 1338;
const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({
    server: server,
    clientTracking: true, // keep track on connected clients
    handleProtocols: handleProtocols // Manage what subprotocol to use.
});


/**
 * Select subprotocol to use for connection.
 *
 * @param {Array} protocols              Subprotocols to choose from, sent
 *                                        by client request.
 *
 * @return {void}
 */
function handleProtocols(protocols) {
    console.log(`Incoming protocol requests '${protocols}'.`);
    for (var i=0; i < protocols.length; i++) {
        if (protocols[i] === "text") {
            return "text";
        } else if (protocols[i] === "json") {
            return "json";
        }
    }
    return false;
}

/**
 * Broadcast data to everyone except one self (ws).
 *
 * @param {WebSocket} ws   The current websocket.
 * @param {string}    data The data to send.
 *
 * @return {void}
 */
function broadcastExcept(ws, data) {
    let clients = 0;

    wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
            clients++;
            console.log(data);
            if (ws.protocol === "json") {
                let msg = {
                    timestamp: Date(),
                    data: data
                };

                client.send(JSON.stringify(msg));
            } else {
                client.send(data);
            }
        }
    });
    console.log(`Broadcasted data to ${clients} (${wss.clients.size}) clients.`);
}



// Setup for websocket requests.
wss.on("connection", (ws /*, req*/) => {
    console.log("Connection received. Adding client.");
    broadcastExcept(ws, `New client connected (${wss.clients.size}).`);

    ws.on("message", (message) => {
        if (message.charAt(0) == "{") {
            let data = JSON.parse(message);

            console.log("Received: %s", data.message);
            broadcastExcept(ws, data);
        } else {
            console.log("Received: %s", message);
            broadcastExcept(ws, message);
        }
    });

    ws.on("error", (error) => {
        console.log(`Server error: ${error}`);
    });

    ws.on("close", (code, reason) => {
        console.log(`Closing connection: ${code} ${reason}`);
        broadcastExcept(ws, `Client disconnected (${wss.clients.size}).`);
    });
});



// Startup server
server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
