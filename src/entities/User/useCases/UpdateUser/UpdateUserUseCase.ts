import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import { UpdateUserDTO } from "./UpdateUserDTO";
import GetUserUseCase from "../GetUser/GetUserUseCase";
import { UsuarioDetalhes } from "@prisma/client";
import UpdateUserDetailsUseCase from "../../../userDetails/useCases/UpdateUserDetails/UpdateUserDetailsUseCase";

export default class UpdateUserUseCase {
    private userRepository: IUserRepository;
    private getUserUseCase;
    private updateUserDetailsUseCase;

    constructor(userRepository: IUserRepository, getUserUseCase: GetUserUseCase, updateUserDetailsUseCase: UpdateUserDetailsUseCase) {
        this.userRepository = userRepository;
        this.getUserUseCase = getUserUseCase;
        this.updateUserDetailsUseCase = updateUserDetailsUseCase;
    }

    async execute({
        Nome,
        Senha,
        CPF,
        Sobrenome,
        NumeroTelefone,
        Sexo
    }: UpdateUserDTO, token: any) {
        const user = await this.getUserUseCase.execute(token);
        await this.updateUserDetailsUseCase.execute({ UsuarioID: user.Id ,CPF, Sobrenome, NumeroTelefone, Sexo }, token);
        return await this.userRepository.update(
            user.Id,
            Nome,
            Senha
        );
    }
}