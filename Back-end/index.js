import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from 'morgan'

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('dev'));
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
  })
  .catch((err) => {
    console.log(err);
  });

import { cursosRouter } from "./routes/cursosRoutes.js";

app.use("/api", cursosRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
