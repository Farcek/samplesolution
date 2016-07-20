var gulp = require('gulp');
var shell = require('gulp-shell');
var Umzug = require('umzug');
var minimist = require('minimist');
var Sequelize = require('sequelize');

gulp.task('migration:new', shell.task('sequelize migration:create --url="mysql://root:pass@test.com/test" --migrations-path="core/migrations" --name=${name()}', {
    templateData: {
        name: function () {
            var arg = minimist(process.argv.slice(2));
            return arg.name;
        }
    }
}));

gulp.task('migration:up', function () {
    return getUmzug()
        .up()
        .catch(function (err) {
            console.log(err.stack);
            console.log(err);
        });
});

gulp.task('migration:down', function () {
    return getUmzug()
        .down()
        .catch(function (err) {
            console.log(err.stack);
            console.log(err);
        });
});

function getUmzug() {
    var config = require('../config');
    var conf = config.db;

    var sequelize = new Sequelize(conf.database, conf.username, conf.password, {
        host: conf.host,
        dialect: conf.dialect,
        pool: false,
        logging: conf.logging
    });

    return new Umzug({
        logging: function (message) {
            console.log('migration :', message);
        },

        storage: 'sequelize',
        storageOptions: {
            sequelize: sequelize,
            tableName: 'migrations'
        },

        migrations: {
            // The params that gets passed to the migrations.
            // Might be an array or a synchronous function which returns an array.
            params: [sequelize.getQueryInterface(), Sequelize],

            // The path to the migrations directory.
            path: 'core/migrations',

            // The pattern that determines whether or not a file is a migration.
            pattern: /^\d+[\w-]+\.js$/,

            // A function that receives and returns the to be executed function.
            // This can be used to modify the function.
            // wrap: function (fun) {
            //     if (fun.length === 3) {
            //         return $promise.promisify(fun);
            //     } else {
            //         return fun;
            //     }
            // }
        }
    });
}