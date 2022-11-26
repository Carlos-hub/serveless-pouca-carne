import { Router } from "express"
import { AuthenticateClientController } from "./modules/account/authenticateClient/authenticateClientController";

import { CreateClientController } from "./modules/cliente/useCases/createClient/createClientController";
import { CreateEntregadorController } from "./modules/entregador/useCase/createEntegrador/createEntregadorController";
const routes = Router();

const createClientController = new CreateClientController();
const createEntregadorController = new CreateEntregadorController();
const authenticateClientController = new AuthenticateClientController();

routes.post('/entregador/signup',createEntregadorController.handle);

routes.post('/client/signup', createClientController.handle);

routes.post('/login',authenticateClientController.handle)




export {routes};