/*
  Warnings:

  - The primary key for the `NotaFiscal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `NotaFiscalID` on the `NotaFiscal` table. All the data in the column will be lost.
  - You are about to drop the `Usuarios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VendasPorMes` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[Id]` on the table `NotaFiscal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Id` to the `NotaFiscal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `NotaFiscal` DROP FOREIGN KEY `NotaFiscal_UsuarioID_fkey`;

-- DropForeignKey
ALTER TABLE `UsuarioDetalhes` DROP FOREIGN KEY `UsuarioDetalhes_UsuarioID_fkey`;

-- DropForeignKey
ALTER TABLE `VendasPorMes` DROP FOREIGN KEY `VendasPorMes_UsuarioID_fkey`;

-- DropIndex
DROP INDEX `NotaFiscal_NotaFiscalID_key` ON `NotaFiscal`;

-- AlterTable
ALTER TABLE `NotaFiscal` DROP PRIMARY KEY,
    DROP COLUMN `NotaFiscalID`,
    ADD COLUMN `Id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`Id`);

-- DropTable
DROP TABLE `Usuarios`;

-- DropTable
DROP TABLE `VendasPorMes`;

-- CreateTable
CREATE TABLE `Usuario` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(100) NOT NULL,
    `Email` VARCHAR(100) NOT NULL,
    `Senha` VARCHAR(100) NOT NULL,
    `DataDeDesativacao` DATETIME(3) NULL,

    UNIQUE INDEX `Usuario_Id_key`(`Id`),
    UNIQUE INDEX `Usuario_Email_key`(`Email`),
    INDEX `UQ_Email`(`Email`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `NotaFiscal_Id_key` ON `NotaFiscal`(`Id`);

-- CreateIndex
CREATE INDEX `IDX_DataNotaFiscal` ON `NotaFiscal`(`DataNotaFiscal`);

-- CreateIndex
CREATE INDEX `IDX_CPF` ON `UsuarioDetalhes`(`CPF`);

-- AddForeignKey
ALTER TABLE `UsuarioDetalhes` ADD CONSTRAINT `UsuarioDetalhes_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NotaFiscal` ADD CONSTRAINT `NotaFiscal_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
