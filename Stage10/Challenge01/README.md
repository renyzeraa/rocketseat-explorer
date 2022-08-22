# Finalizando o MyMovies 🎥🎬

---

#### Stacks utilizadas

![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

---

### Principais pontos que terá no projeto:

**1. Autenticação**

> Permitir que um usuário se autentique na aplicação utilizando um e-mail e uma senha. A autenticação foi feita utilizando JWT(Token).

**2. Upload de imagens**

> Permitir que o usuário consiga alterar a sua imagem de perfil ao clicar no ícone de câmera, localizada no canto inferior direito da foto

![Untitled](https://user-images.githubusercontent.com/101990719/185929955-22f52e83-bfbc-49fd-8b06-335fbee60349.png)

**3. Integração front-end e back-end.**

> Por último e muito importante, foi revistos diversos conteúdos importantes ao fazer a integração do nossa interface (front-end feita no stage 09) com a nossa api (back-end feita no stage 08). Aqui que a mágica acontece! 💜

No próximo stage 11, a aplicação estará online e operante, aguardem 😂.

---

#### Projeto Licenciado ⚖ [![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](../../LICENSE)

---

# 💻 Sobre o desafio

Wooow, esse Stage veio recheado de conteúdo 👀. Compreendi o uso de useState e useEffect, contextos, na prática, e agora, foi desenvolvido a integração do front-end com o back-end do MyMovies. O front-end feito em React.js utilizando o vitejs como setup inicial, estilização com styled-components (CSS dentro do javascript), que ja estava praticamente pronto, reutilizando ele do stage 09. O back-end, no caso a API, feita com Node.js, utilizando express, sendo reutilizada do stage 08.

Botei a mão na massa e apliquei tudo o que foi apresentado no módulo e nos stages anteriores, na **MyMovies** 🚀

#### Agora explicando mais sobre o desenvolvimento.

Foi feita a junção do front-end com o back-end do MyMovies. Primeiro foi implantado um fluxo de autenticação, famoso login no sistema. Nessa autenticação, tem a funcionalidade de checar se o usuário tem cadastro, checar email e senha através de uma solicitação e ao realizar essa checagem e estiver tudo certo, ira gerar um Token de autenticação (uma chave que identifica ele logado na minha aplicação).
Com ele autenticado, ira disponibilizar a navegação na aplicação, dando um destino as requisições feitas anteriormente e junto da navegação ele carregará sempre um token, pois sem ele o usuário não tera nenhuma permissão de acessar o site, onde o middleware ficara responsável por "fiscalizar" identificar isto.
O Token que o usuário ira gerar, sera o JTW , um padrão de mercado que define ele no formato .JSON para troca de informações através das requisições HTTP.
O objetivo é se trocar informações entre a aplicação, a API e o back-end. O JWT não é um mecanismo de autenticação, mas ajuda para na parte do fluxo de autenticar o usuário. Ele gera um hash formado por letras e números (uma "criptografia") contendo (header, payload, verify signature).

---

# MyMovies 🎞🎬

<div align="center">

### Preview do projeto 🤩

[![Video Preview](imagem preview do projeto aqui)](link.aqui)

</div>

## Rodando localmente 👇

Clone o projeto

```bash
  git clone https://github.com/renyzeraa/rocketseat-explorer.git
```

Entre no diretório do BackEnd

```bash
  cd rocketseat-explorer/Stage10/Challenge01/backend
```

Instale as dependências

```bash
  npm install
```

Reinicie o Banco de Dados

```bash
  npm run migrate
```

Agora inicie a aplicação

```bash
  npm run dev
```

Navegue ate o diretório do Frontend

```bash
  cd rocketseat-explorer/Stage10/Challenge01/frontend/rocketmovies
```

Instale as dependências

```bash
  npm install
```

Agora inicie a aplicação

```bash
  npm run dev
```

No próprio terminal ira gerar o local host onde ira rodar a aplicação

Exemplo:

```
> rocketmovies@0.0.0 dev
> vite


  VITE v3.0.5  ready in 2110 ms

  ➜  Local:   http://127.0.0.1:5173/     <- copie este link e cole no navegador
  ➜  Network: use --host to expose

```

Cuide que ao fazer CTRL+C no terminal, você interrompe a aplicação. So iniciar novamente caso ocorra.

```bash
  npm run dev
```

---

### Contato

<img align="left" src="https://www.github.com/renyzeraa.png?size=150">

### [**Renan Leandro da Silva**](https://github.com/renyzeraa)

🛠 `Frontend` Developer Jr. <br>
📍 Santa Catarina - Brazil

<a href="https://www.linkedin.com/in/renyzeraa" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn Badge" height="25"></a>&nbsp;<a href="mailto:renansilvaytb@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white" alt="Gmail Badge" height="25"></a>&nbsp;<a href="#"><img src="https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white" title="renan_s#7826" alt="Discord Badge" height="25"></a>&nbsp;<a href="https://www.github.com/renyzeraa" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white" alt="GitHub Badge" height="25"></a>&nbsp;

<br clear="left"/>
