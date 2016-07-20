import * as Sequelize from 'sequelize';
import * as mixing from './mixing';


export type IAttributes = sample.model.user.IAttributes;

export interface IInstance extends IAttributes, Sequelize.Instance<IAttributes> {

}

export interface IModel extends Sequelize.Model<IInstance, IAttributes> {

}


export function define(sequelize:Sequelize.Sequelize):IModel {


    var options:Sequelize.DefineOptions<IInstance> = {
        tableName: "user",
        timestamps: false,
        classMethods: {},
        instanceMethods: {}
    };

    return sequelize.define<IInstance, IAttributes>('Category', {
        id: mixing.idIntIncrement,
        username: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        }

    }, options);
}