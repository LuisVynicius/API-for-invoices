import { IInvoiceRepository } from "../../repositories/interfaces/IInvoiceRepository";

export default class DeleteInvoiceUseCase {
    private userRepository: IInvoiceRepository;

    constructor(usersRepository: IInvoiceRepository) {
        this.userRepository = usersRepository;
    }

    async execute(Id: number) {
        return this.userRepository.delete(Id); 
    }
}