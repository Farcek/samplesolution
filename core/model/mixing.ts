import * as Sequelize from 'sequelize';

export const idIntIncrement : Sequelize.DefineAttributeColumnOptions = {
        type : Sequelize.INTEGER,
        field : "id",
        primaryKey : true,
        autoIncrement : true,        
}

export const idInt : Sequelize.DefineAttributeColumnOptions = {
        type : Sequelize.INTEGER,
        field : "id",
        primaryKey : true
}

export const name : Sequelize.DefineAttributeColumnOptions = {
        type : Sequelize.STRING,
        field : "name",
        allowNull : false
}

