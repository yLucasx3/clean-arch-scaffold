import express, { Router } from "express";
import cors from "cors";
import fooRoute from "./routes/foo.route";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

const router = Router();

fooRoute(router);

app.use("/api", router);

export { app };
