import { NotFoundError } from "../../../../helpers/api-erros";
import generateJWT from "../../../../utils/jwt";
import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import argon2i from "argon2";

export default class GetUserUseCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(Email: string, password: string) {
        if (!Email || !password) {
            throw new Error();
        }
        
        const user = await this.userRepository.findByEmail(Email);
        if (!user) {
            throw new NotFoundError("Proibido01");
        } else if (!await argon2i.verify(user.Senha, password)) {
            throw new NotFoundError("Proibido02");
        } else{
            return generateJWT(user.Email);
        }
    }

}