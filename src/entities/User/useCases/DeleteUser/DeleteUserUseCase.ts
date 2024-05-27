import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import GetUserUseCase from "../GetUser/GetUserUseCase";

export default class DeleteUserUseCase {
    private userRepository: IUserRepository;
    private getUserUseCase;

    constructor(userRepository: IUserRepository, getUserUseCase: GetUserUseCase) {
        this.userRepository = userRepository;
        this.getUserUseCase = getUserUseCase;
    }

    async execute(Id: number) {
        const user = await this.getUserUseCase.execute(Id);
        return this.userRepository.delete(Id); 
    }
}