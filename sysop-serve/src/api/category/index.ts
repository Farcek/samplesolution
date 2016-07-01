import * as express from "express";
import * as bodyParser from "body-parser";
import List from "./list";
import Create from "./create";
import Edit from "./edit";
import Single from "./single";
import Delete from "./delete";

export default class CategoryRoot {

    root: express.Router;

    constructor() {
        this.root = express.Router();
        this.root.get("/", new List().handler());
        this.root.post("/", bodyParser.json(), new Create().handler());
        this.root.put("/:id", bodyParser.json(), new Edit().handler());
        this.root.put("/:id", bodyParser.json(), new Edit().handler());
        this.root.get("/:id", new Single().handler());
        this.root.delete("/:id", new Delete().handler());
    }
}