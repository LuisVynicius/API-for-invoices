import { NotaFiscal, PrismaClient } from "@prisma/client"
import { IInvoiceRepository } from "./interfaces/IInvoiceRepository"
import { CreateInvoiceDTO } from "../useCases/CreateInvoice/CreateInvoiceDTO"

export default class UserRepository implements IInvoiceRepository {
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }
    
    findInvoicesByDate(startDate: Date, endDate: Date, Id: number) {
        return this.prisma.notaFiscal.findMany({
            where: {
                DataNotaFiscal: {
                    gte: startDate,
                    lte: endDate,
                },
                UsuarioID: Id
            },
        });
    }

    findAllInvoices(Id: number) {
        return this.prisma.notaFiscal.findMany({
            where: {
                UsuarioID: Id
            }
        });
    }
    findById(id: number) {
        return this.prisma.notaFiscal.findUnique({
            where: {
                Id: id
            }
        });
    }
    async create({
        NumeroNotaFiscal,
        DataNotaFiscal,
        Valor,
        UsuarioID
    }: CreateInvoiceDTO) {
        return this.prisma.notaFiscal.create({
            data: {
                NumeroNotaFiscal,
                DataNotaFiscal,
                Valor,
                UsuarioID
            }
        });
    }
    delete(id: number){
        return this.prisma.notaFiscal.delete({
            where: {
                Id: id
            }
        });
    }
    
}