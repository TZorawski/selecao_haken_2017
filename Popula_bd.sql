
/*Popular Tabelas Teste*/
INSERT INTO `sistema_haken`.`equipamento` (`identificador`, `data_compra`, `descricao`, `status`, `campus_origem`, `login`) VALUES ('123', '2018-01-01', 'teste', '1', 'Campo Mourao', '1921860');
INSERT INTO `sistema_haken`.`equipamento` (`identificador`, `data_compra`, `descricao`, `status`, `campus_origem`, `login`) VALUES ('321', '2018-02-01', 'teste1', '0', 'Campo Mourao', '1921924');


INSERT INTO `sistema_haken`.`movimentacao` (`identificador`, `data`, `campus`, `equipamento`, `sala`, `login`) VALUES ('1', '2018-02-02', 'Campo Mourao', '123', 'E001', '1921860');
INSERT INTO `sistema_haken`.`movimentacao` (`identificador`, `data`, `campus`, `equipamento`, `sala`, `login`) VALUES ('2', '2018-01-10', 'Campo Mourao', '321', 'E100', '1921924');


INSERT INTO `sistema_haken`.`sala` (`identificador`, `numero`, `bloco`, `login`) VALUES ('E001', '001', 'E', '1921860');
INSERT INTO `sistema_haken`.`sala` (`identificador`, `numero`, `bloco`, `login`) VALUES ('E100', '100', 'E', '1921924');

INSERT INTO `sistema_haken`.`usuario` (`login`, `nome`, `senha`) VALUES ('1921860', 'Gabriel', '123');
INSERT INTO `sistema_haken`.`usuario` (`login`, `nome`, `senha`) VALUES ('1921924', 'Otavio', '321');
