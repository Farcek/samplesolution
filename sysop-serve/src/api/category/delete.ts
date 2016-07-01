import * as  tsrouter from "tsrouter";
import * as express from "express";
import * as Promise from "bluebird";
import * as Sequelize from "sequelize";

import {model}  from "../../context";



type IParam = sysopapi.category.destroy.IParam;
type IResult = sysopapi.category.destroy.IResult;

export default class Delete extends tsrouter.TSHandler<IParam, IResult> {

    public req(req: express.Request): IParam | Promise<IParam> {
        return {
            id: req.params.id
        };
    }

    public valid(param: IParam, req: express.Request): boolean | Promise<boolean> {
        return true;
    }

    public res(param: IParam, res: express.Response): IResult | Promise<IResult> {

        return model.Category.destroy({
            where: {
              id: param.id
            }
        })
            .then(rsu => {
                return {
                    status: "ok"
                }
            })
    }
}
