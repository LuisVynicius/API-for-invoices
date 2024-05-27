import { IUserRepository } from "../../repositories/interfaces/IUserRepository";

export default class GetUserUseCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(Id: number) {
        const user = await this.userRepository.findById(Id);
        if (!user) {
            throw new Error("Usuário não encontrado. Id: " + Id);
        }
        return user;
    }

}