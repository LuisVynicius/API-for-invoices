import { CredentialsError, NotFoundError } from "../../../../helpers/api-erros";
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
            throw new CredentialsError("Credenciais inválidas. ");
        }
        
        const user = await this.userRepository.findByEmail(Email);
        if (!user || !await argon2i.verify(user.Senha, password)) {
            throw new CredentialsError("Credenciais inválidas. ");
        } else{
            return generateJWT(user.Email);
        }
    }

}