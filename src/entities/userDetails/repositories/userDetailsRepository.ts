import { PrismaClient, UsuarioDetalhes } from "@prisma/client";
import { IUserDetailsRepository } from "./interfaces/IUserDetailsRepository";

export default class UserDetailsRepository implements IUserDetailsRepository {
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }
    
    findById(id: number) {
        return this.prisma.usuarioDetalhes.findUnique({
            where: {
                UsuarioID: id
            }
        });
    }
    update(userDetails: UsuarioDetalhes) {
        return this.prisma.usuarioDetalhes.update({
            where: {
                UsuarioID: userDetails.UsuarioID
            },
            data: userDetails
        });
    }
    create(Id: number) {
        return this.prisma.usuarioDetalhes.create({
            data: {
                UsuarioID: Id,
                CPF: "null" + Id,
                Sobrenome: "",
                NumeroTelefone: "",
                Sexo: ""
            }
        });
    }
    delete(id: number): void {
        throw new Error("Method delete not implemented.");
    }
    

}