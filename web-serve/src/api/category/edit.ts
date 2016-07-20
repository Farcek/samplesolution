import * as  tsrouter from "tsrouter";
import * as express from "express";
import * as Promise from "bluebird";
import * as Sequelize from "sequelize";

import {model}  from "../../context";


type IParam = sysopapi.category.edit.IParam;
type IResult = sysopapi.category.edit.IResult;

export default class Edit extends tsrouter.TSHandler<IParam, IResult> {

    public req(req:express.Request):IParam | Promise<IParam> {
        return {
            id: req.params.id,
            name: req.body.name
        };
    }

    public valid(param:IParam, req:express.Request):boolean | Promise<boolean> {
        return true;
    }

    public res(param:IParam, res:express.Response):IResult | Promise<IResult> {

        return model.Category.update({name: param.name},
            {
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
