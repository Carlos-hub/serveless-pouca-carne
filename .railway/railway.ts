import { defineRailway, github, postgres, preserve, project, service } from "railway/iac";

/**
 * Projeto Pouca Carne: banco, API e front-end.
 *
 * O front-end mora em outro repositório (Carlos-hub/Pouca-carne) e entra aqui
 * como serviço do mesmo projeto, para compartilhar ambiente e variáveis.
 *
 * Antes do primeiro apply, defina os segredos direto no Railway:
 *   railway variable set JWT_SECRET=<segredo forte> --service api
 *   railway variable set VITE_API_URL=https://<dominio-da-api> --service web
 */
export default defineRailway(() => {
  const db = postgres("postgres");

  const api = service("api", {
    source: github("Carlos-hub/serveless-pouca-carne", { branch: "main" }),
    // build e start vêm do Dockerfile, que o Railway usa por padrão quando existe
    env: {
      DATABASE_URL: db.env.DATABASE_URL,
      // segredo fica no Railway, nunca no repositório
      JWT_SECRET: preserve(),
    },
  });

  const web = service("web", {
    source: github("Carlos-hub/Pouca-carne", { branch: "main" }),
    env: {
      // Vite injeta no build: aponte para o domínio público da API
      VITE_API_URL: preserve(),
      // portas definidas pelo Railway a partir do EXPOSE do Dockerfile
      APP_PORT: preserve(),
      PORT: preserve(),
    },
  });

  return project("pouca-carne", {
    resources: [db, api, web],
  });
});
