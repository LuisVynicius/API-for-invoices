import { NotFoundError } from "../../../../helpers/api-erros";
import { IUserDetailsRepository } from "../../repositories/interfaces/IUserDetailsRepository";

export default class GetUserDetailsUseCase {
    private userDetailsRepository: IUserDetailsRepository;

    constructor(userDetailsRepository: IUserDetailsRepository) {
        this.userDetailsRepository = userDetailsRepository;
    }

    async execute(Id: number) {
        const userDetails = await this.userDetailsRepository.findById(Id);
        if (!userDetails) {
            throw new NotFoundError("Detalhes de usuário não encontrado. Id: " + Id);
        }
        return userDetails;
    }
}