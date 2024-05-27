import { IInvoiceRepository } from "../../repositories/interfaces/IInvoiceRepository";
import { NotFoundError } from "../../../../helpers/api-erros";

export default class GetInvoiceUseCase {
    private invoiceRepository: IInvoiceRepository;

    constructor(invoiceRepository: IInvoiceRepository) {
        this.invoiceRepository = invoiceRepository;
    }

    async execute(Id: number) {
        const invoice = await this.invoiceRepository.findById(Id);

        if (!invoice) {
            throw new NotFoundError("Nota Fiscal não encontrado. Id: " + Id); 
        }

        return invoice;
    }
}