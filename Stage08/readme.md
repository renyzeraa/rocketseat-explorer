A ideia agora foi criar uma aplicação em Node.js onde o usuário cadastra seu email, senha (sendo a senha criptografada por uma biblioteca externa (bcrypt)), tem outra aba onde indica um filme que gostou, preenche com algumas informações (nome, descrição, nota) e cria tags relacionadas a ele.
Utilizei a framework express para atender minhas requisições com Node.js.
Para desenvolver, utilizei o nodemon para rodar minha API enquanto fazia alterações, trabalhando sempre com entrada e saída de arquivos .JSON.
Foi feito e organizado da melhor maneira para que pudesse ser feitos alterações e atualizações, separado por rotas que vai me levar até o caminhos que o cliente faz a requisição, também os controllers, onde fica minhas regras de negócios, são os controladores junto de middlewares para fazer verificações se está de acordo ou não essas requisições, e cada controller respeitando uma boa prática de deixar apenas 5 funções cada.
Foi posto em prática as requisições HTTP com o insomnia (ferramenta gratuita, muito interessante e fácil de usar), onde foi aplicado GET, POST, PUT, DELETE, PATCH. Tratando sempre de me retornar o status certo com as respostas HTTP, onde caso acontecesse algum erro interno ou externo, fosse feito uma sinalização com a biblioteca async erros.
Achei muito bacana o node.js poder ir instalando e executando as bibliotecas conforme a minha demanda, isso deixa muito enxuta a aplicação, dando mais performance e possibilidades.
Pensando em outros sistemas e browsers, utilizei o path, que vem junto do node, para ajudar a resolver problemas com os diretórios dos arquivos, para que tudo fosse sempre “encontrado”.
Na parte de Banco de dados, o SQLite foi quem escolhi como drive dos dados, mas como sistema de gerenciador de banco de dados a ferramenta beekeper me ajudou muito, além de ser muito intuitiva é também super fácil de usar. Revi alguns conceitos de comandos SQL, os DDL (Data Definition Language ) para criar e definir dados e os DML (Data Manipulation Language) para manipular os dados. Para criação de tabelas dos dados, a biblioteca migration foi quem me auxiliou e utilizei o Query builder knex, para gerar os comandos SQL independente do banco de dados que eu for utilizar.
Com o migration conseguimos fazer versões do meu banco de dados, onde guarda as alterações feitas caso precise fazer alguma alteração ou reversão de algum dado.

## Contact

<img align="left" src="https://avatars.githubusercontent.com/renyzeraa?size=100">

Made with ❤️ by [Renan L. Silva](https://github.com/renyzeraa)! <br>
🛠 Frontend Developer Jr. <br>
📍 Santa Catarina - Brazil <br>

<a href="https://www.linkedin.com/in/renyzeraa" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn Badge" height="20"></a>&nbsp;
<a href="mailto:renansilvaytb@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white" alt="Gmail Badge" height="20"></a>&nbsp;
<a href="#"><img src="https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white" title="renan_s#7826" alt="Discord Badge" height="20"></a>&nbsp;
<a href="https://www.github.com/renyzeraa" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white" alt="GitHub Badge" height="20"></a>&nbsp;

<br clear="left"/>
