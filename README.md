# serveless-pouca-carne

###### Aplicação back-end de delivery 

###### Funcionalidades

* Cadastrar clientes
* Cadastrar Entregadores
* Cadastrar produtos
* Cadastrar pedidos
* Aceitar entregas


ToDo restaurante:
aprovar pedidos
editar produtos
editar pedidos
delete produtos

ToDo Client

só pode criar delivery se logado
remover produto do pedido


## Como rodar

Os dois repositórios precisam estar lado a lado (`serveless-pouca-carne/` e `Pouca-carne/`),
porque o Compose sobe a API, o banco e o front-end juntos:

```bash
docker compose up -d --build
```

| Serviço | URL |
|---|---|
| Front-end | http://localhost:5173 |
| API | http://localhost:3333 |
| Postgres | localhost:5433 |

As migrations e o seed rodam sozinhos no start da API. O seed é idempotente e cria:

| Papel | Email | Senha |
|---|---|---|
| Restaurante | admin@poucacarne.com | admin123 |
| Cliente | cliente@poucacarne.com | cliente123 |

Para rodar o seed de novo: `docker compose exec api npx prisma db seed`.

## Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `DATABASE_URL` | String de conexão do Postgres |
| `JWT_SECRET` | Segredo de assinatura dos tokens — **obrigatório**, a API não sobe sem ele |
| `PORT` | Porta HTTP (padrão 5000; o Compose usa 3333) |

## Autenticação

- `isAuthenticate` valida a assinatura e a expiração do token com `verify`.
- O id do usuário sai sempre do `sub` do token, nunca de um header enviado pelo cliente.
- Rotas `/company/*` usam `isAuthenticateRestaurante`, que exige um usuário da tabela `usuarios`.

## Deploy no Railway

A infraestrutura está descrita em `.railway/railway.ts` (Postgres + API + front-end
no mesmo projeto). Antes do primeiro apply:

```bash
railway link                       # ou railway init --name pouca-carne
railway variable set JWT_SECRET=<segredo forte> --service api
railway variable set VITE_API_URL=https://<dominio-da-api> --service web
railway config plan                # revise o plano
railway config apply               # só depois de revisar
```
