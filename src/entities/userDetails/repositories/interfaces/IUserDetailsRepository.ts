import { UsuarioDetalhes } from "@prisma/client";

export interface IUserDetailsRepository {
    findById(id: number): Promise<UsuarioDetalhes | null>;
    update(userDetails: UsuarioDetalhes): void;
    create(usuarioID: number): void;
    delete(id: number): void;
}