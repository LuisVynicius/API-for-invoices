import { IInvoiceRepository } from "../../repositories/interfaces/IInvoiceRepository";
import GetInvoiceUseCase from "../GetInvoice/GetInvoiceUseCase";

export default class DeleteInvoiceUseCase {
    private userRepository: IInvoiceRepository;
    private getInvoiceUseCase: GetInvoiceUseCase;

    constructor(usersRepository: IInvoiceRepository, getInvoiceUseCase: GetInvoiceUseCase) {
        this.userRepository = usersRepository;
        this.getInvoiceUseCase = getInvoiceUseCase;
    }

    async execute(Id: number) {
        const invoice = await this.getInvoiceUseCase.execute(Id);
        return this.userRepository.delete(Id); 
    }
}