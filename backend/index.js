// express = backend framework of nodejs
const express = require('express');
const dbConnection = require('./database/dbConnection');
const Galleryrouter = require('./routes/galleryRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const blogrouter = require('./routes/blogRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const contactRouter = require('./routes/contactRouter');
const userRouter = require('./routes/userRoutes');

dotenv.config(); // Load .env variables

const PORT = process.env.PORT || 8000;

// Create server
const server = express();

// Middleware
server.use(cors());
server.use(express.json());

// Routes
server.use("/api",userRouter)
server.use("/api",contactRouter)
server.use("/api",bookingRouter)
server.use("/api",blogrouter)
server.use("/api", Galleryrouter); // Gallery endpoints
server.get("/fetch_data", (req, res) => {
    res.send("This is the route to fetch data");
});

// POST test route (not related to gallery, optional)
server.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    res.send("Data received");
});

// Connect to DB and start server
server.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);
    dbConnection();
});
