-- CreateTable
CREATE TABLE `Usuarios` (
    `UsuarioID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(100) NOT NULL,
    `Email` VARCHAR(100) NOT NULL,
    `Senha` VARCHAR(100) NOT NULL,
    `DataDeDesativacao` DATETIME(3) NULL,

    UNIQUE INDEX `Usuarios_UsuarioID_key`(`UsuarioID`),
    UNIQUE INDEX `Usuarios_Email_key`(`Email`),
    INDEX `UQ_Email`(`Email`),
    PRIMARY KEY (`UsuarioID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsuarioDetalhes` (
    `UsuarioID` INTEGER NOT NULL,
    `CPF` VARCHAR(14) NOT NULL,
    `Sobrenome` VARCHAR(100) NOT NULL,
    `NumeroTelefone` VARCHAR(20) NULL,
    `Sexo` VARCHAR(1) NULL,

    UNIQUE INDEX `UsuarioDetalhes_UsuarioID_key`(`UsuarioID`),
    UNIQUE INDEX `UsuarioDetalhes_CPF_key`(`CPF`),
    INDEX `UQ_UsuarioID`(`UsuarioID`),
    PRIMARY KEY (`UsuarioID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VendasPorMes` (
    `VendasPorMesID` INTEGER NOT NULL AUTO_INCREMENT,
    `Ano` INTEGER NULL,
    `Mes` INTEGER NULL,
    `TotalVendas` DOUBLE NULL,
    `UsuarioID` INTEGER NOT NULL,

    INDEX `FK_VendasPorMes_UsuarioID`(`UsuarioID`),
    PRIMARY KEY (`VendasPorMesID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NotaFiscal` (
    `NotaFiscalID` INTEGER NOT NULL AUTO_INCREMENT,
    `NumeroNotaFiscal` VARCHAR(191) NOT NULL,
    `DataNotaFiscal` DATETIME(3) NOT NULL,
    `Valor` DOUBLE NOT NULL,
    `UsuarioID` INTEGER NOT NULL,

    UNIQUE INDEX `NotaFiscal_NotaFiscalID_key`(`NotaFiscalID`),
    PRIMARY KEY (`NotaFiscalID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UsuarioDetalhes` ADD CONSTRAINT `UsuarioDetalhes_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuarios`(`UsuarioID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VendasPorMes` ADD CONSTRAINT `VendasPorMes_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuarios`(`UsuarioID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NotaFiscal` ADD CONSTRAINT `NotaFiscal_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuarios`(`UsuarioID`) ON DELETE RESTRICT ON UPDATE CASCADE;
