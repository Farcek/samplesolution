import * as Sequelize from 'sequelize';

import * as category from "./category";
import * as user from "./user";


export default class Model {
    private sequelize:Sequelize.Sequelize;


    public Category:category.IModel;
    public User:user.IModel;

    constructor(conf:IConfig) {
        this.sequelize = this.sq(conf);


        this.Category = category.define(this.sequelize);
        this.User = user.define(this.sequelize);

        this.associate();
        this.sync();
    }

    private sq(conf:IConfig):Sequelize.Sequelize {
        return new Sequelize(conf.database, conf.username, conf.password, {
            host: conf.host,
            dialect: conf.dialect,
            pool: conf.pool,
            logging: conf.logging
        });
    }

    private associate() {
        // Object.keys(this.sequelize.models).forEach((modelName) => {
        //     if (this.models[modelName].associate) {
        //         this.models[modelName].associate(this.models);
        //     }
        // });
    }

    private sync() {
        this.sequelize
        //.sync({ force: true })
            .authenticate()
            .then(function (errors) {
                console.log('db errors :', errors);
            });
    }
}

export interface IConfig {
    database:string,
    username:string,
    password:string,

    host:string,
    dialect:string,

    pool:any,
    logging:any
}