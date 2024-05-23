import { IUserDetailsRepository } from "../../repositories/interfaces/IUserDetailsRepository";

export default class GetUserDetailsUseCase {
    private userDetailsRepository: IUserDetailsRepository;

    constructor(userDetailsRepository: IUserDetailsRepository) {
        this.userDetailsRepository = userDetailsRepository;
    }

    async execute(Id: number) {
        return this.userDetailsRepository.findById(Id);
    }
}