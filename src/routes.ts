import { Router } from "express"
import { AuthenticateClientController } from "./modules/account/authenticateClient/authenticateClientController";

import { CreateClientController } from "./modules/cliente/useCases/createClient/createClientController";
import { CreateEntregadorController } from "./modules/entregador/useCase/createEntegrador/createEntregadorController";
import { CreateProdutosController } from "./modules/restaurante/createUseCase/createProdutos/createProdutosController";
const routes = Router();

const createClientController = new CreateClientController();
const createEntregadorController = new CreateEntregadorController();
const authenticateClientController = new AuthenticateClientController();
const createProdutosController = new CreateProdutosController();
// entregador
routes.post('/entregador/signup',createEntregadorController.handle);

// Client
routes.post('/client/signup', createClientController.handle);
routes.post('/login',authenticateClientController.handle)

// Restaurante
routes.post('/produto',createProdutosController.handle)





export {routes};