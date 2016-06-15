import * as Sequelize from 'sequelize';

import * as category from "./category";



export default class Model {
    public Category: category.IModel
    private sequelize: Sequelize.Sequelize;


    constructor(conf: IConfig) {
        this.sequelize = this.sq(conf);


        this.Category = category.define(this.sequelize);

        this.associate();
        this.sync();

    }
    private sq(conf: IConfig): Sequelize.Sequelize {
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
            .sync({ force: true })
            .then(function () {
                console.log('DB. It worked!');
            }, function (err) {
                console.log('An error occurred while creating the table:', err);
            });

    }
}

export interface IConfig {
    database: string,
    username: string,
    password: string,

    host: string,
    dialect: string,

    pool: any,
    logging: any
}