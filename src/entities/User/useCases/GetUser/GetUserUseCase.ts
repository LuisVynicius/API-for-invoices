import { IUserRepository } from "../../repositories/interfaces/IUserRepository";

export default class GetUserUseCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(Id: number) {
        return this.userRepository.findById(Id);
    }
}