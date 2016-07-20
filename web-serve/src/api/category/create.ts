import * as  tsrouter from "tsrouter";
import * as express from "express";
import * as Promise from "bluebird";
import * as Sequelize from "sequelize";

import {model}  from "../../context";



type IParam = sysopapi.category.create.IParam;
type IResult = sysopapi.category.create.IResult;

export default class Create extends tsrouter.TSHandler<IParam, IResult> {

    public req(req: express.Request): IParam | Promise<IParam> {
        return {
            name : req.body.name
        };
    }

    public valid(param: IParam, req: express.Request): boolean | Promise<boolean> {
        return true;
    }

    public res(param: IParam, res: express.Response): IResult | Promise<IResult> {

        return model.Category.create({
            name: param.name
        })
            .then(rsu => {
                return {
                    status: "ok"
                }
            })
    }
}