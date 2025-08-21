import express from "express";
import upload from "./upload.config.js";
import { uploadImage } from "./upload.controller.js";

const uploadRouter = express.Router();

uploadRouter.post("/image", upload.single("image"), uploadImage);

export default uploadRouter;
