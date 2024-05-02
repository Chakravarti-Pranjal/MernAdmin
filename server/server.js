require('dotenv').config();
const express = require('express');
const authRoute = require('./router/auth.router');
const contactRoute = require('./router/contact-router');
const app = express();
const connectDB = require('./utils/db');
const errorMiddleware = require('./middlewares/error.middleware');

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

// error middleware
app.use(errorMiddleware);


const PORT = 4001 ;

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
    });
})
