import express from "express";
import movieController from "../controllers/movies.controller.js";

const movieRouter = express.Router();

movieRouter.get("/", movieController.findAll);
movieRouter.post("", movieController.create);

export default movieRouter;