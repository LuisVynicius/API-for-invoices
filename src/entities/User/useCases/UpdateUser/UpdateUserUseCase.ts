import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import { UpdateUserDTO } from "./UpdateUserDTO";
import GetUserUseCase from "../GetUser/GetUserUseCase";

export default class UpdateUserUseCase {
    private userRepository: IUserRepository;
    private getUserUseCase;

    constructor(userRepository: IUserRepository, getUserUseCase: GetUserUseCase) {
        this.userRepository = userRepository;
        this.getUserUseCase = getUserUseCase;
    }

    async execute({
        Id,
        Nome,
        Senha
    }: UpdateUserDTO) {
        const user = await this.getUserUseCase.execute(Id);
        return await this.userRepository.update({
            Id,
            Nome,
            Senha
        });
    }
}