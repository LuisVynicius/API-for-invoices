import { UsuarioDetalhes } from "@prisma/client";
import { IUserDetailsRepository } from "../../repositories/interfaces/IUserDetailsRepository";

export default class UpdateUserDetailsUseCase {
    private userDetailsRepository: IUserDetailsRepository;

    constructor(userDetailsRepository: IUserDetailsRepository) {
        this.userDetailsRepository = userDetailsRepository;
    }

    async execute({
        UsuarioID,
        CPF,
        Sobrenome,
        NumeroTelefone,
        Sexo
    }: UsuarioDetalhes) {
        return await this.userDetailsRepository.update({
            UsuarioID,
            CPF,
            Sobrenome,
            NumeroTelefone,
            Sexo
        });
    }
}