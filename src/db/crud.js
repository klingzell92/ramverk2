// MongoDB
const mongo = require("mongodb").MongoClient;
const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/movie";
var ObjectId = require('mongodb').ObjectID;

class MongoCrud {
    constructor() {
        const db  = await mongo.connect(dsn);
        const col = await db.collection('movie');
    }
}
