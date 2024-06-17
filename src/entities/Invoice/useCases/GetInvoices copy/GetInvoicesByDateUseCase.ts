import GetUserUseCase from "../../../User/useCases/GetUser/GetUserUseCase";
import { IInvoiceRepository } from "../../repositories/interfaces/IInvoiceRepository";

export default class GetInvoicesByDateUseCase {
    private invoiceRepository: IInvoiceRepository;
    private getUserUseCase;

    constructor(invoiceRepository: IInvoiceRepository, getUserUseCase: GetUserUseCase) {
        this.invoiceRepository = invoiceRepository;
        this.getUserUseCase = getUserUseCase;
    }

    async execute(token: any, startDate: Date, endDate: Date) {
        try {
            const user = await this.getUserUseCase.execute(token);
            let invoices = await this.invoiceRepository.findInvoicesByDate(startDate, endDate, user.Id);
            let returnInvoice = [];
            if (invoices !== null) {
                for (let invoice of invoices) {
                    returnInvoice.push({
                        Id: invoice.Id,
                        NumeroNotaFiscal: invoice.NumeroNotaFiscal,
                        DataNotaFiscal: new Date(invoice.DataNotaFiscal).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
                        Valor: invoice.Valor,
                        UsuarioID: invoice.UsuarioID
                    })
                }
                return returnInvoice;
            } else {
                throw new Error("Lista de faturas retornada é nula");
            }
        } catch (error) {
            throw error;
        }
    }   
}
