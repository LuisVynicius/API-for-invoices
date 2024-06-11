import bodyParser from "body-parser";
import express from "express";
import router from "./routes";
import morgan from "morgan";
import cors, { CorsOptions } from "cors";
import { errorMiddleware } from "./middlewares/error";
//import { CorsError } from "./helpers/api-erros";

const corsOptions: cors.CorsOptions = {
    origin: "*",/*(origin, callback) => {
        if (origin === `${process.env.ALLOWEDORIGIN}` || !origin) {
            callback(null, true);
        } else {
            callback(new CorsError('Not allowed by CORS'));
        }
    },*/
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200
};


const run = async () => {
    const app = express();
    
    app.disable("x-powered-by");

    app.use(morgan('dev'));

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    app.use(cors(corsOptions));

    app.use(router);

    app.use(errorMiddleware);

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
