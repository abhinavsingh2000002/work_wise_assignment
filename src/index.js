import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import app from "./app.js";
import path from "path";

// Function to get __dirname in ES module
const __dirname = path.dirname(new URL(import.meta.url).pathname);

dotenv.config({ path: "./.env" });

connectDB();

// Serve static files from the frontend dist folder
app.use(express.static(path.join(__dirname, '../dist')));

// Route to serve the frontend index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
