import express from "express";
import dotenv from "dotenv";

import movieRoutes  from "./routes/movieRoutes.js";

dotenv.config();

const app = express();

const PORT = 3000;

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Movie Finder Api is working")
})
app.use("/api", movieRoutes);

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});