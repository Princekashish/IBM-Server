import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import cors from "cors";
import userRouter from "./Routers/user.routers.js";  
import funding from "./Routers/funding.routers.js";  
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// database Connection
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MongooseDB connection FAIL ${error}`);
  });

// Middleware
app.use(express.json()); // Using express.json() instead of bodyParser.json()
app.use(cors());

// Routes
app.use("/auth/v1/user", userRouter);
app.use("/api/fundraisers",funding)
