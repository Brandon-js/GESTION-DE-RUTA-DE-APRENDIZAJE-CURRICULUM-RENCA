import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from 'morgan';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

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
