import * as Sequelize from 'sequelize';
import * as mixing from './mixing';





type IAttributes = sample.model.category.IAttributes;



export interface IInstance extends IAttributes, Sequelize.Instance<IAttributes> {

}

export interface IModel extends Sequelize.Model<IInstance, IAttributes> {

}


export function define(sequelize: Sequelize.Sequelize): IModel {

    var d: IModel;



    var options: Sequelize.DefineOptions<IInstance> = {
        tableName: "category",
        timestamps: false,
        classMethods: {

        },
        instanceMethods: {

        }
    };

    return sequelize.define<IInstance, IAttributes>('Category', {
        id: mixing.idIntIncrement,
        name: mixing.name
    }, options);
}