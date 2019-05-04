import express from "express";
import http from "http";
import path from 'path';
import bodyParser from "body-parser";
import users from "./routes/users";
import utils from './utils';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.normalize(__dirname + "/../src")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", users);
app.use("/utils", utils);

app.listen(port, () =>
  console.log(`Server is listening on port ${port}`)
);
