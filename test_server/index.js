const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');
const cors = require('./cors');

const hostname = 'localhost';
const port = 4000;
const app = express();
const userRouter = express.Router();

app.use(bodyParser.json());

userRouter.route('/')
    .options(cors.corsWithOptions, (req,res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, (req,res,next) => {
        let users = []
        for(let i=1;i<=10;i++) {
            users.push({
                "id": i,
                "name": faker.name.firstName() + ' ' + faker.name.lastName(),
                "email": faker.internet.email(),
                "phone": faker.phone.phoneNumber(),
                "country": faker.address.country(),
            })
        }
        res.send({'users': users});
    });

app.use('/users', userRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});