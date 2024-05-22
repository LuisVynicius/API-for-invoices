import { IUserRepository } from "../../repositories/interfaces/IUserRepository";

export default class GetUserUseCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(UsuarioID: number) {
        return this.userRepository.findById(UsuarioID);
    }
}