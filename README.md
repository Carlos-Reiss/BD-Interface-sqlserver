# Interface para Visualização de dados em um banco SQL Server 🐱‍👤

### Fases para desenvolvimento do projeto

- [ ] Crie 2 stored procedures para facilitar o acesso ao banco de dados pelos usuários e programas de aplicação que possuam um bom nível de complexidade (isto é, que recebam parâmetros e utilizem pelo menos 3 tabelas, sub-consultas e cláusulas group by e having).

- [ ] Crie 2 triggers para garantir restrições de integridade suplementares ao esquema do banco de dados que possuam um bom nível de complexidade (isto é, que utilizem pelo menos 3 tabelas, sub-consultas e cláusulas group by e having).

- [ ] Crie um programa em qualquer linguagem de programação que possua interface gráfica que contenha as seguintes funcionalidades: inserção de alguma informação que precise salvar (pelo menos 2 tabelas e utilizando chave estrangeira), execução de 1 das stored procedures criada na 1ª questão e execução de 1 das triggers criada na 2ª questão.

- [ ] Faça uma demonstração que o seu projeto está funcionando que dure no máximo 5 minutos e esteja disponível no YouTube. Teste as suas stored procedures, triggers e a interface gráfica do seu trabalho gravando com áudio e vídeo.


### Baixando e Instalando o projeto

- Dentro do projeto tem um arquivo chamado **.env.example** esse projeto segue esse padrão:
 
  ```
    USER=SA ← nesta variável é necessário colocar o usuário do seu banco de dados, como exemplo utilizamos 'SA'
    PASSWORD=  ← nesta variável é necessário colocar o password do seu banco de dados. isso é pessoal
    SERVER=localhost ← nesta variável é necessário colocar onde está o servidor do banco de dados, como exemplo utilizamos 'localhost', caso o seu esteja em um local diferente utilize o mesmo que você definiu
    DATABASE=master  ← nesta variável é necessário colocar a banco de dados que se deseja trabalhar, como exemplo utilizamos 'master'
  ```
  