import dotenv from "dotenv";
import express from "express";
import { router as routes } from "./routes/index";

dotenv.config();

export const app = express();
const port = process.env.PORT;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
