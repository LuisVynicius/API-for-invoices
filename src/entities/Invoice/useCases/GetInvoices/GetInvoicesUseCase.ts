import { IInvoiceRepository } from "../../repositories/interfaces/IInvoiceRepository";

export default class GetInvoicesUseCase {
    private invoiceRepository: IInvoiceRepository;

    constructor(invoiceRepository: IInvoiceRepository) {
        this.invoiceRepository = invoiceRepository;
    }

    async execute() {
        return this.invoiceRepository.findAllInvoices();
    }
}