import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { router as routes } from "./routes/index";

dotenv.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@node-api-rest.qlejsii.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("📦 Connected to Database");
    app.listen(port, () => {
      console.log(`http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => console.error(err));

export const app = express();
const port = process.env.PORT;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(routes);
