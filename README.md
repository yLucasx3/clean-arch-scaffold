# clean-arch-scaffold

## Description

This project is a scaffold of an common API. You can use it to build an API without concern about architeture, infra, best tools, docker configuration,
git setup, debugger, documentation and etc.

Under development:
  - tests
  - scripts to generate files
  - lint
  - husk
  - build configs
  - socket examples

## Requisites

- Docker;

If you are using VS Code, just install this extension [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers), restart VS Code and choose "Reopen in Container", this will configure the project automatically, where the only requirement would be Docker.


## Setup
- Clone the repository;
- Install dependencies (`npm install`);
- Setup PostgreSQL (`docker compose up -d`);
- Setup Prisma `npx prisma migrate dev`;
- Copy `.env.example` file (`cp .env.example .env`);
- Run Application (`npm run dev`);

- Test API here! (I personally recommend testing with [Hoppscotch](https://hoppscotch.io/)).
