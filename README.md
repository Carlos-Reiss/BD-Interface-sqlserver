# **Interface para Visualização de dados em um banco SQL Server** 🐱‍👤

### Fases para desenvolvimento do projeto 👨🏽‍💻

- [ ] Crie 2 stored procedures para facilitar o acesso ao banco de dados pelos usuários e programas de aplicação que possuam um bom nível de complexidade (isto é, que recebam parâmetros e utilizem pelo menos 3 tabelas, sub-consultas e cláusulas group by e having).

- [ ] Crie 2 triggers para garantir restrições de integridade suplementares ao esquema do banco de dados que possuam um bom nível de complexidade (isto é, que utilizem pelo menos 3 tabelas, sub-consultas e cláusulas group by e having).

- [ ] Crie um programa em qualquer linguagem de programação que possua interface gráfica que contenha as seguintes funcionalidades: inserção de alguma informação que precise salvar (pelo menos 2 tabelas e utilizando chave estrangeira), execução de 1 das stored procedures criada na 1ª questão e execução de 1 das triggers criada na 2ª questão.

- [ ] Faça uma demonstração que o seu projeto está funcionando que dure no máximo 5 minutos e esteja disponível no YouTube. Teste as suas stored procedures, triggers e a interface gráfica do seu trabalho gravando com áudio e vídeo.


### Baixando e Instalando o projeto 💻

 → segue a baixo um guia de dependências e instalação de projeto ←

 Dependências do projeto 📦

    . NodeJS
    . Yarn ou Npm
    . Microsoft SQL Server

  - [ ] Clonando o projeto:
  ```bash
  $ git clone https://github.com/Carlos-Reiss/BD-Interface-sqlserver.git
  ```
  - [ ] Instalando Dependências da nossa api:
  ```bash
  $ cd BD-interface-sqlserver
  $ cd backend
  $ yarn install ou npm install
  ```

Se liga ai ❗

- Dentro do projeto tem um arquivo chamado **.env.example** esse projeto segue esse padrão:
 
  ```env
    USER=SA ← nesta variável é necessário colocar o usuário do seu banco de dados, como exemplo utilizamos 'SA'
    PASSWORD=  ← nesta variável é necessário colocar o password do seu banco de dados. isso é pessoal
    SERVER=localhost ← nesta variável é necessário colocar onde está o servidor do banco de dados, como exemplo utilizamos 'localhost', caso o seu esteja em um local diferente utilize o mesmo que você definiu
    DATABASE=master  ← nesta variável é necessário colocar a banco de dados que se deseja trabalhar, como exemplo utilizamos 'master'
  ```
  sendo assim clone esse arquivo e mude seu nome somente para **.env** dentro dele coloque suas configurações do banco de dados sql server e salve ✔.

  - [ ] Rodando o projeto apos configurara tudo 🚀:
  ```bash
  $ yarn dev:server
    # por padrão irá rodar numa porta que ainda irei definir
  ```