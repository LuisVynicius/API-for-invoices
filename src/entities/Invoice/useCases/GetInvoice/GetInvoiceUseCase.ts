import { IInvoiceRepository } from "../../repositories/interfaces/IInvoiceRepository";
import { NotFoundError } from "../../../../helpers/api-erros";

export default class GetInvoiceUseCase {
    private invoiceRepository: IInvoiceRepository;

    constructor(invoiceRepository: IInvoiceRepository) {
        this.invoiceRepository = invoiceRepository;
    }

    async execute(Id: number) {
        let invoice = await this.invoiceRepository.findById(Id);
        if (!invoice) {
            throw new NotFoundError("Nota Fiscal não encontrado. Id: " + Id); 
        }
        const invoiceDate = new Date(invoice.DataNotaFiscal).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
        const formattedDate = invoiceDate.split(", ");
        
        const returnInvoice = {
            Id : invoice.Id,
            NumeroNotaFiscal : invoice.NumeroNotaFiscal,
            DataNotaFiscal : formattedDate[1] + " "+ formattedDate[0],
            Valor : invoice.Valor,
            UsuarioID : invoice.UsuarioID
        }
        return returnInvoice;
    }
}