import { IUserRepository } from "../../repositories/interfaces/IUserRepository";

export default class GetUsersUseCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute() {
        const users = this.userRepository.findAllUsers();
        if (!users) {
            throw new Error("Erro ao buscar usuários");
        }
        return users;
    }
}