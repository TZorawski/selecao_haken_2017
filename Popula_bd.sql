/*Popular Tabelas Teste*/

INSERT INTO `sistema_haken`.`usuario` VALUES ('1921860', 'Gabriel', '123');
INSERT INTO `sistema_haken`.`usuario` VALUES ('1921924', 'Otavio', '321');

INSERT INTO `sistema_haken`.`sala` VALUES ('E001', '001', 'E', '1921860');
INSERT INTO `sistema_haken`.`sala` VALUES ('E100', '100', 'E', '1921924');

INSERT INTO `sistema_haken`.`equipamento` VALUES ('123', '2018-02-02', 'teste', '1', 'Curitiba', 'Medianeira', null, '1921860');
INSERT INTO `sistema_haken`.`equipamento` VALUES ('321', '2018-01-10', 'teste1', '0', 'Curitiba', 'Campo Mourão', 'E100', '1921924');
INSERT INTO `sistema_haken`.`equipamento` VALUES ('234', '2018-10-14', 'teste2', '0', 'Curitiba', 'Campo Mourão', 'E100', '1921924');

INSERT INTO `sistema_haken`.`movimentacao` VALUES (null, NOW(), 'Campo Mourão', '123', 'E001', '1921860');
INSERT INTO `sistema_haken`.`movimentacao` VALUES (null, NOW(), 'Medianeira', '123', null, '1921860');
INSERT INTO `sistema_haken`.`movimentacao` VALUES (null, NOW(), 'Campo Mourão', '321', 'E100', '1921924');