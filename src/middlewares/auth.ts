import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken"
import config from "../config";

export const auth = async (request: Request, response: Response, next: NextFunction) => {
    const authHeader = request.headers.authorization;
    
    if (!authHeader) {
        return response.status(403).send("Token é requirido. ");
    }

    const [ ,token] = authHeader.split(" ");
    try {
        await jwt.verify(token, config.jwt.SECRET_KEY);
        next();
    } catch(error) {
        return response.status(403).send("Token inválido. ");
    }
}