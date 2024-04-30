require('dotenv').config();
const express = require('express');
const router = require('./router/auth.router');
const app = express();
const connectDB = require('./utils/db');

app.use(express.json());

app.use("/api/auth", router);


const PORT = 4001 ;

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
    });
})
