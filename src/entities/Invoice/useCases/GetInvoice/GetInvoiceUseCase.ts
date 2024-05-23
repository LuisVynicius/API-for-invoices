import { IInvoiceRepository } from "../../repositories/interfaces/IInvoiceRepository";

export default class GetInvoiceUseCase {
    private userRepository: IInvoiceRepository;

    constructor(userRepository: IInvoiceRepository) {
        this.userRepository = userRepository;
    }

    async execute(Id: number) {
        return this.userRepository.findById(Id);
    }
}