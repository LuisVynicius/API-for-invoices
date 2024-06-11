import { IInvoiceRepository } from "../../repositories/interfaces/IInvoiceRepository";
import { CreateInvoiceDTO } from "./CreateInvoiceDTO";
import GetUserUseCase from "../../../User/useCases/GetUser/GetUserUseCase";

export default class CreateInvoiceUseCase {
    private invoiceRepository: IInvoiceRepository;
    private getUserUseCase;

    constructor(invoiceRepository: IInvoiceRepository, getUserUseCase: GetUserUseCase) {
        this.invoiceRepository = invoiceRepository;
        this.getUserUseCase = getUserUseCase;
    }

    async execute({
        NumeroNotaFiscal,
        DataNotaFiscal,
        Valor,
        UsuarioID
    }: CreateInvoiceDTO) {
        const dataNotaFiscalGMT = new Date(DataNotaFiscal).toISOString();

        return this.invoiceRepository.create({
            NumeroNotaFiscal,
            DataNotaFiscal: new Date(dataNotaFiscalGMT),
            Valor,
            UsuarioID
        });
    }
}