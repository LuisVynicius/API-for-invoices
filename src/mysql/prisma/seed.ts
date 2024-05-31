import { PrismaClient } from "@prisma/client";
import argon2i from "argon2";

const prisma = new PrismaClient();

const createRootUser = async (prisma: PrismaClient) => {
  const users = await prisma.usuario.findMany();

  if (users.length === 0) {
    await prisma.usuario.create({
      data: {
        Email: "Email01@gmail.com",
        Senha: await argon2i.hash("Senha1234"),
        Nome: "Usuario01"
      },
    });
    await prisma.usuarioDetalhes.create({
        data: {
            UsuarioID: 1,
            CPF: "null1",
            Sobrenome: "",
            NumeroTelefone: "",
            Sexo: "",
        }
    });
  }
};

createRootUser(prisma);