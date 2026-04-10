
//server ko initiate krna middleware use krna aur app export krna taki server.js me use kr ske
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.CLIENT_URL,'http://localhost:5173'],
    credentials:true
}))

// Importing routes
const authRouter = require("./routes/auth.routes")

// Using routes
app.use('/api/auth', authRouter);

module.exports = app; 