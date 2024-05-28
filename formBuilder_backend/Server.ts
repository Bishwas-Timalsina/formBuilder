import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
app.use(express.json({ limit: "200000000000b" }));
app.use(cors());
dotenv.config();

mongoose
  .connect(process.env.DB_URL!, {})
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((e: any) => {
    console.log("error connecting to the database", e);
  });

import "./models/form.model";
import formRouter from "./router/form.routes";
app.use('/api/v1/form',formRouter)
app.listen(8000, () => {
  {
    console.log("Server started");
  }
});
