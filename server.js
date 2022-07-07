const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require("morgan");
const cors = require('cors');
const config = require('./src/config/config');
const port = process.env.PORT || 3000;


const app = express();
app.use(morgan("dev"));
//app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* CORS */
app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'DELETE', 'PATCH', 'POST'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}));


/* ROUTES */
const TicketRoute = require('./src/routes/Ticket');
app.use('/api/Ticket', TicketRoute);


mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

connection.on('error', (err) => {
    console.log('MongoDB connection error. please make sure MongoDB is running. ' + err);
    process.exit();
});
app.listen(port);
console.log('There will be dragons: ' + config.path);