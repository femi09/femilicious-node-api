import "express-async-errors";
import "dotenv/config";
import express, { Application } from "express";
import routes from "./startup/routes";
import { initializeDB } from "./startup/db";

const app: Application = express();

//connect to db
initializeDB();

routes(app);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`App is listening on port ${port}`));
