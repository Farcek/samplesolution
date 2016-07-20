import * as  tsrouter from "tsrouter";
import * as express from "express";
import * as Promise from "bluebird";
import * as Sequelize from "sequelize";

import {model}  from "../../context";



type Param = sysopapi.category.list.IParam;
type Result = sysopapi.category.list.IResult;

export default class List extends tsrouter.TSHandler<Param, Result> {

    public req(req: express.Request): Param | Promise<Param> {
        return {
            limit: 10,
            page: 1
        };
    }

    public valid(param: Param, req: express.Request): boolean | Promise<boolean> {
        return true;
    }

    public res(param: Param, res: express.Response): Result | Promise<Result> {

        return model.Category.findAndCountAll({

            limit: param.limit,
            offset: param.limit * (param.page - 1)
        })
            .then(rsu => {
                var r: Result = {
                    total: rsu.count,
                    items: rsu.rows
                };
                return r;
            })



    }
}