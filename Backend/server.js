import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { userRoute } from "./Routes/user.route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const dbURI = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
}));

// MongoDB connection
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;

db.on("open", () => {
    console.log("Connection Successful");
});

db.on("error", () => {
    console.log("Connection not Successful");
});

// Routes
userRoute(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
