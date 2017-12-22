[![Build Status](https://travis-ci.org/klingzell92/ramverk2.svg?branch=master)](https://travis-ci.org/klingzell92/ramverk2)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/klingzell92/ramverk2/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/klingzell92/ramverk2/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/klingzell92/ramverk2/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/klingzell92/ramverk2/?branch=master)

Ramverk 2
====================
Tekniker
------------
Som backend och server så valde jag att använda mig utav Express och sedan för att visa vyerna använder jag mig utav pug. För databasen så använder jag mig utav MongoDB. Jag använder mig utav WebSockets för min chatt och sedan för testerna så används Mocha.

Installera
--------------
Börja med att clona repot härifrån Github. Och kör efter det:

```shell
npm install
```

För att starta servern utan MongoDB så kör man:
```shell
npm start
```

För att starta servern inklusive MongoDB i docker så kör man:

```shell
 npm run start-docker
```

För att starta chatservern så kör man:

```shell
 npm run start-chat
```

Portar
----------
Man kan använda sig utav följande systemvariabler för att ändra porten som servern lyssnar på DBWEBB_PORT, PORT och LOCAL_DEV_PORT.
Om inget värde har satts för någon av systemvariablerna så används port 1337 som default.

Chatservern använder sig utav port 1338

MongoDB kan använda sig utav systemvariabeln DBWEBB_DSN fast default är mongodb://localhost:27017

Tester
----------
För att köra testerna utan docker:

```shell
 npm test
```

För att köra testerna i olika versioner utav node i docker så kör man:

```shell
 npm run test1

 npm run test2

 npm run test3
```
