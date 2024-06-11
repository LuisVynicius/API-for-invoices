import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import GetUserUseCase from "../GetUser/GetUserUseCase";
import { NotFoundError } from "../../../../helpers/api-erros";

export default class DeleteUserUseCase {
    private userRepository: IUserRepository;
    private getUserUseCase;

    constructor(userRepository: IUserRepository, getUserUseCase: GetUserUseCase) {
        this.userRepository = userRepository;
        this.getUserUseCase = getUserUseCase;
    }

    async execute(Id: number) {
        const user = await this.userRepository.findById(Id);
        if (!user) {
            throw new NotFoundError("Usuário não encontrado. Id: " + Id);
        }
        return this.userRepository.delete(Id); 
    }
}