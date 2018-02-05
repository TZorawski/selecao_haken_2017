-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema sistema_haken
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `sistema_haken` ;

-- -----------------------------------------------------
-- Schema sistema_haken
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sistema_haken` DEFAULT CHARACTER SET utf8 ;
USE `sistema_haken` ;

-- -----------------------------------------------------
-- Table `sistema_haken`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sistema_haken`.`usuario` ;

CREATE TABLE IF NOT EXISTS `sistema_haken`.`usuario` (
  `login` VARCHAR(20) NOT NULL,
  `nome` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`login`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sistema_haken`.`equipamento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sistema_haken`.`equipamento` ;

CREATE TABLE IF NOT EXISTS `sistema_haken`.`equipamento` (
  `identificador` INT NOT NULL,
  `aquisicao` DATE NOT NULL,
  `descricao` TEXT(500) NOT NULL,
  `status` INT NOT NULL,
  `campus_origem` VARCHAR(20) NOT NULL,
  `login` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`identificador`, `login`),
  INDEX `fk_equipamento_usuario1_idx` (`login` ASC),
  CONSTRAINT `fk_equipamento_usuario1`
    FOREIGN KEY (`login`)
    REFERENCES `sistema_haken`.`usuario` (`login`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sistema_haken`.`sala`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sistema_haken`.`sala` ;

CREATE TABLE IF NOT EXISTS `sistema_haken`.`sala` (
  `identificador` VARCHAR(4) NOT NULL,
  `numero` INT(3) NOT NULL,
  `bloco` VARCHAR(1) NOT NULL,
  `login` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`identificador`, `login`),
  INDEX `fk_sala_usuario1_idx` (`login` ASC),
  CONSTRAINT `fk_sala_usuario1`
    FOREIGN KEY (`login`)
    REFERENCES `sistema_haken`.`usuario` (`login`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sistema_haken`.`movimentacao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sistema_haken`.`movimentacao` ;

CREATE TABLE IF NOT EXISTS `sistema_haken`.`movimentacao` (
  `identificador` INT NOT NULL,
  `data` DATE NOT NULL,
  `campus` VARCHAR(20) NOT NULL,
  `equipamento` INT NOT NULL,
  `sala` VARCHAR(4) NULL,
  `login` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`identificador`, `login`, `equipamento`, `sala`),
  INDEX `fk_movimentacao_equipamento1_idx` (`equipamento` ASC),
  INDEX `fk_movimentacao_sala1_idx` (`sala` ASC),
  INDEX `fk_movimentacao_usuario1_idx` (`login` ASC),
  CONSTRAINT `fk_movimentacao_equipamento1`
    FOREIGN KEY (`equipamento`)
    REFERENCES `sistema_haken`.`equipamento` (`identificador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_movimentacao_sala1`
    FOREIGN KEY (`sala`)
    REFERENCES `sistema_haken`.`sala` (`identificador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_movimentacao_usuario1`
    FOREIGN KEY (`login`)
    REFERENCES `sistema_haken`.`usuario` (`login`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `sistema_haken` ;

-- -----------------------------------------------------
-- Placeholder table for view `sistema_haken`.`view1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sistema_haken`.`view1` (`id` INT);

-- -----------------------------------------------------
-- View `sistema_haken`.`view1`
-- -----------------------------------------------------
DROP VIEW IF EXISTS `sistema_haken`.`view1` ;
DROP TABLE IF EXISTS `sistema_haken`.`view1`;
USE `sistema_haken`;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
