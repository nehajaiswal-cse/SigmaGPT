
//server ko initiate krna middleware use krna aur app export krna taki server.js me use kr ske
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"https://sigmagpt-frontend-4b94.onrender.com",
    credentials:true
}))

// Importing routes
const authRouter = require("./routes/auth.routes")

// Using routes
app.use('/api/auth', authRouter);

module.exports = app; 