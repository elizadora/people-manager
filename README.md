## People Manager

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON_Server-0A0A0A?style=for-the-badge&logo=json&logoColor=white)


### Sobre
People Manager é uma aplicação que simula um gerenciador de pessoas, onde é possível adicionar, editar e excluir pessoas. Foi feito com o objetivo de praticar o uso de TypeScript e Tailwind CSS. O foco principal foi a utilização da lib React Query, que facilita o manuseio de dados em aplicações React, e o uso do JSON Server, que é uma ferramenta que permite criar uma API REST fake rapidamente.

### Funcionalidades
- Adicionar pessoa
- Editar pessoa
- Excluir pessoa
- Filtrar pessoas

### Tecnologias
nome da tecnologia com link

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://react-query.tanstack.com/)
- [JSON Server](https://github.com/typicode/json-server/tree/v0)
- [Vite](https://vitejs.dev/)

### Guia de instalação

1. Clone o repositório
```bash
git clone https://github.com/elizadora/people-manager.git
```

2. Entre na pasta do projeto e instale as dependências
```bash
cd people-manager
npm install
```

3. Inicie o JSON Server, na estrutura do projeto existe um arquivo chamado `db.json` localizado dentro da pasta `src/db`, ele contém os dados que serão utilizados pela aplicação. Para iniciar o JSON Server, execute o comando:

```bash
npx json-server --watch db/db.json --port 3001
```

4. Inicie a aplicação
```bash
npm run dev
```

5. Acesse a aplicação em `http://localhost:5173`