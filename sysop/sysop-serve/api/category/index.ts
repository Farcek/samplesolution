import * as express from "express";
import * as bodyParser from "body-parser";
import List from "./list";
import Create from "./create";

export default class CategoryRoot {

    root: express.Router;

    constructor() {
        this.root = express.Router();
        this.root.get("/", new List().handler());
        this.root.post("/", bodyParser.json(), new Create().handler());
    }
}