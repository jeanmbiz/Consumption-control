import "express-async-errors";
import express, { json } from "express";
import handleError from "./errors/handleError";

const app = express();
app.use(json());

app.use(handleError);

export default app;
