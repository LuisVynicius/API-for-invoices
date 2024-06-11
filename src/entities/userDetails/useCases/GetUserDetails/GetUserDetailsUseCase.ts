import { NotFoundError } from "../../../../helpers/api-erros";
import GetUserUseCase from "../../../User/useCases/GetUser/GetUserUseCase";
import { IUserDetailsRepository } from "../../repositories/interfaces/IUserDetailsRepository";

export default class GetUserDetailsUseCase {
    private userDetailsRepository: IUserDetailsRepository;
    private getUserUseCase;

    constructor(userDetailsRepository: IUserDetailsRepository, getUserUseCase: GetUserUseCase) {
        this.userDetailsRepository = userDetailsRepository;
        this.getUserUseCase = getUserUseCase;
    }

    async execute(token: any) {

        const user = await this.getUserUseCase.execute(token);
        const userDetails = await this.userDetailsRepository.findById(user.Id);
        if (!userDetails) {
            throw new NotFoundError("Detalhes de usuário não encontrado. Id: " + user.Id);
        }
        return userDetails;
    }
}
