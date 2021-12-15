
require('./db/connection');

// require express middleware - definition: software that acts as a bridge between an operating system or database and applications, especially on a network.
const express = require('express');

// require cors middleware (unsure why).
const cors = require('cors');

// deals
const userRouter = require('./user/userRoutes');

//initialize the app
const app = express();

const port = 5000;

// use express middleware to convert input to an object
app.use(express.json());
app.use(cors());

app.use(userRouter);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
