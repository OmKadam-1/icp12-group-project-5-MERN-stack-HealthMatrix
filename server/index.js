import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
