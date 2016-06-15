import * as express from "express";
import CategoryRoot from "./category";


export default class ApiRoot {

    root:express.Router;

    constructor() {
        this.root = express.Router();

        this.root.use('/category', new CategoryRoot().root);
    }
}