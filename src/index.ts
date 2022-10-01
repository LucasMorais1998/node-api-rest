import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.APP_PORT;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.listen(port, () => {
  console.log(`http://localhost:${process.env.APP_PORT}/`);
});
