import * as  tsrouter from "tsrouter";
import * as express from "express";
import * as Promise from "bluebird";
import * as Sequelize from "sequelize";

import {model}  from "../../context";



type IParam = sysopapi.category.single.IParam;
type IResult = sysopapi.category.single.IResult;

export default class Single extends tsrouter.TSHandler<IParam, IResult> {

    public req(req: express.Request): IParam | Promise<IParam> {
        return {
            id: req.params.id
        };
    }

    public valid(param: IParam, req: express.Request): boolean | Promise<boolean> {
        return true;
    }

    public res(param: IParam, res: express.Response): IResult | Promise<IResult> {

        return model.Category.findAll({
          where: {
            id: param.id
          }
        })
            .then(rsu => {
                var r: IResult = {
                    item: rsu
                };
                return r;
            })
    }
}
