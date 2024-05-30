import {sign} from "jsonwebtoken";
import config from "../config";

const generateJWT = (Email: string) => {
    const token = sign({Email},config.jwt.SECRET_KEY, {
        expiresIn: "1d"
    });
    return token;
}

export default generateJWT;