require('dotenv').config();
const express = require('express');
const router = require('./router/auth.router');
const app = express();
const connectDB = require('./utils/db');
const errorMiddleware = require('./middlewares/error.middleware');

app.use(express.json());

app.use("/api/auth", router);

// error middleware
app.use(errorMiddleware);


const PORT = 4001 ;

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
    });
})
