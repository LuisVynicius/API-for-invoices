-- CreateTable
CREATE TABLE "Usuario" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nome" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Senha" TEXT NOT NULL,
    "DataDeDesativacao" DATETIME
);

-- CreateTable
CREATE TABLE "UsuarioDetalhes" (
    "UsuarioID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CPF" TEXT NOT NULL,
    "Sobrenome" TEXT NOT NULL,
    "NumeroTelefone" TEXT,
    "Sexo" TEXT,
    CONSTRAINT "UsuarioDetalhes_UsuarioID_fkey" FOREIGN KEY ("UsuarioID") REFERENCES "Usuario" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "NotaFiscal" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "NumeroNotaFiscal" TEXT NOT NULL,
    "DataNotaFiscal" DATETIME NOT NULL,
    "Valor" REAL NOT NULL,
    "UsuarioID" INTEGER NOT NULL,
    CONSTRAINT "NotaFiscal_UsuarioID_fkey" FOREIGN KEY ("UsuarioID") REFERENCES "Usuario" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_Id_key" ON "Usuario"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_Email_key" ON "Usuario"("Email");

-- CreateIndex
CREATE INDEX "UQ_Email" ON "Usuario"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioDetalhes_UsuarioID_key" ON "UsuarioDetalhes"("UsuarioID");

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioDetalhes_CPF_key" ON "UsuarioDetalhes"("CPF");

-- CreateIndex
CREATE INDEX "IDX_CPF" ON "UsuarioDetalhes"("CPF");

-- CreateIndex
CREATE UNIQUE INDEX "NotaFiscal_Id_key" ON "NotaFiscal"("Id");

-- CreateIndex
CREATE INDEX "IDX_DataNotaFiscal" ON "NotaFiscal"("DataNotaFiscal");
