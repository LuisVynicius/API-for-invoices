import { UsuarioDetalhes } from "@prisma/client";
import { IUserDetailsRepository } from "../../repositories/interfaces/IUserDetailsRepository";
import GetUserDetailsUseCase from "../GetUserDetails/GetUserDetailsUseCase";

export default class UpdateUserDetailsUseCase {
    private userDetailsRepository: IUserDetailsRepository;
    private getUserDetailsUseCase;

    constructor(userDetailsRepository: IUserDetailsRepository, getUserDetailsUseCase: GetUserDetailsUseCase) {
        this.userDetailsRepository = userDetailsRepository;
        this.getUserDetailsUseCase = getUserDetailsUseCase;
    }

    async execute({
        UsuarioID,
        CPF,
        Sobrenome,
        NumeroTelefone,
        Sexo
    }: UsuarioDetalhes, token: any) {
        const userDetails = await this.getUserDetailsUseCase.execute(token);
        return await this.userDetailsRepository.update({
            UsuarioID,
            CPF,
            Sobrenome,
            NumeroTelefone,
            Sexo
        });
    }
}