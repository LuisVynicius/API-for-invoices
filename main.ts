import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
    try {
        const user01 = await prisma.usuarios.create({
            data: {
                Nome: "Usuario01",
                Email: "Email01",
                Senha: "Senha"
            },
        });
        console.log("Usuário criado:", user01);
    } catch (error) {
        console.error("Erro durante a criação do usuário:", error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
