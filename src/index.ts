import bodyParser from "body-parser";
import { getPrisma } from "./mysql/prisma/prisma";
import express from "express";
import router from "./routes";
import morgan from "morgan";

const run = async () => {
    const app = express();
    const prisma = await getPrisma();
    
    app.disable("x-powered-by");

    app.use(morgan('dev'));

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    app.use(router);

    const port = 8080;
    const server = app.listen(`${process.env.PORT ?? port}`, () => {
        console.log(
            'Server ready'
        );
    });

    return {
        app,
        server,
    };

}

const main = run();

export default main;