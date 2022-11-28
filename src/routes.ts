import { Router } from "express"
import { AuthenticateClientController } from "./modules/account/authenticateClient/authenticateClientController";

import { CreateClientController } from "./modules/cliente/useCases/createClient/createClientController";
import { CreateDeliveryController } from "./modules/cliente/useCases/createDelivery/createDeliveryController";
import { GetDeliveryController } from "./modules/cliente/useCases/getDelivery/getDeliveryController";
import { CreateEntregadorController } from "./modules/entregador/useCase/createEntegrador/createEntregadorController";
import { CreateProdutosController } from "./modules/restaurante/createUseCase/createProdutos/createProdutosController";
const routes = Router();

const createClientController = new CreateClientController();
const createEntregadorController = new CreateEntregadorController();
const authenticateClientController = new AuthenticateClientController();
const createProdutosController = new CreateProdutosController();
const createDeliveryController = new CreateDeliveryController();
const getDelivery = new GetDeliveryController();
// entregador
routes.post('/entregador/signup',createEntregadorController.handle);

// Client
routes.post('/client/signup', createClientController.handle);
routes.post('/login',authenticateClientController.handle)
routes.post('/client/delivery',createDeliveryController.handle)
routes.get('/produtos', getDelivery.handle);

// Restaurante
routes.post('/produto/signup',createProdutosController.handle)





export {routes};