import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import { UpdateUserDTO } from "./UpdateUserDTO";

export default class UpdateUserUseCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute({
        Id,
        Nome,
        Senha
    }: UpdateUserDTO) {
        return await this.userRepository.update({
            Id,
            Nome,
            Senha
        });
    }
}