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
        Valor
    }: CreateInvoiceDTO, token : any) {
        const dataNotaFiscalGMT = new Date(DataNotaFiscal).toISOString();
        const user = await this.getUserUseCase.execute(token);
        return this.invoiceRepository.create({
            NumeroNotaFiscal,
            DataNotaFiscal: new Date(dataNotaFiscalGMT),
            Valor,
            UsuarioID: user.Id
        });
    }
}