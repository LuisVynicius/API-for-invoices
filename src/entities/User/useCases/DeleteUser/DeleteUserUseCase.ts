import { IUserRepository } from "../../repositories/interfaces/IUserRepository";

export default class DeleteUserUseCase {
    private userRepository: IUserRepository;

    constructor(usersRepository: IUserRepository) {
        this.userRepository = usersRepository;
    }

    async execute(Id: number) {
        return this.userRepository.delete(Id); 
    }
}