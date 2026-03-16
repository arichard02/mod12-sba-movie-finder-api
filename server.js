import express from "express";
import dotenv from "dotenv";

import { searchMovies, getMovieDetails } from "./controllers/movieController.js";

dotenv.config();

const app = express();

const PORT = 3000;

app.get("/api/search", searchMovies);

app.get("/api/movies/:id", getMovieDetails);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});