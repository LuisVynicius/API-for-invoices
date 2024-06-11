import config from "../../../../config";
import { NotFoundError } from "../../../../helpers/api-erros";
import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import * as jwt from "jsonwebtoken"

export default class GetUserUseCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(token: any) {
        const decoded: any = jwt.verify(token, config.jwt.SECRET_KEY);
        const user = await this.userRepository.findByEmail(decoded.Email);
        if (!user) {
            throw new NotFoundError("Usuário não encontrado. Email: " + decoded.Email);
        }
        return user;
    }

}