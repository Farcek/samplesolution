import * as express from "express";



export default class SysopRoute {

    static index(req: express.Request, res: express.Response) {
        res.render('index', {
            title: 'index'
        });
    }
    static web404(req: express.Request, res: express.Response) {
        res
            .status(404)
            .render('404', {
                title: 'not found url'
            });
    }

    static api404(req: express.Request, res: express.Response) {
        res
            .status(404)
            .json({
                message: 'not found'
            });
    }

}