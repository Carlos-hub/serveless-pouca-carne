import { Router } from "express"
import { AuthenticateClientController } from "./modules/account/authenticateClient/authenticateClientController";
import { CancelaPedidosController } from "./modules/cliente/useCases/cancelaPedidos/CancelaPedidosController";

import { CreateClientController } from "./modules/cliente/useCases/createClient/createClientController";
import { CreateDeliveryController } from "./modules/cliente/useCases/createDelivery/createDeliveryController";
import { GetDataClientController } from "./modules/cliente/useCases/getDataClient/getDataClientController";
import { GetDeliveryController } from "./modules/cliente/useCases/getProdutos/getDeliveryController";
import { CreateEntregadorController } from "./modules/entregador/useCase/createEntegrador/createEntregadorController";
import { AprovaPedidosController } from "./modules/restaurante/UseCase/aprovePedidos/AprovaPedidosController";
import { CancelaPedidosRestauranteController } from "./modules/restaurante/UseCase/cancelaPedidos/CancelaPedidosController";
import { CancelaPedidosUseCase } from "./modules/restaurante/UseCase/cancelaPedidos/CancelaPedidosUseCase";
import { CreateProdutosController } from "./modules/restaurante/UseCase/createProdutos/createProdutosController";


const routes = Router();

const createClientController = new CreateClientController();
const createEntregadorController = new CreateEntregadorController();
const authenticateClientController = new AuthenticateClientController();
const createProdutosController = new CreateProdutosController();
const createDeliveryController = new CreateDeliveryController();
const getDelivery = new GetDeliveryController();
const aprovaPedidosController = new AprovaPedidosController();
const getProdutos = new GetDeliveryController();
const cancelaPedidos = new CancelaPedidosController(); 
const cancelaPedidosRestaurante = new CancelaPedidosRestauranteController();
const getDataClientController = new GetDataClientController();
// entregador
routes.post('/entregador/signup',createEntregadorController.handle);

// Client
routes.post('/client/signup', createClientController.handle);
routes.post('/client/login',authenticateClientController.handle);
routes.post('/client/delivery',createDeliveryController.handle);
routes.get('/client/produtos', getDelivery.handle);
routes.post('/client/cancela',cancelaPedidos.handle);
routes.post('/client/data',getDataClientController.handle);

// Restaurante
routes.post('/company/produto/signup',createProdutosController.handle);
routes.post('/company/pedidos/aprove',aprovaPedidosController.handle);
routes.get('/company/produtos/list',getProdutos.handle)
routes.post('/company/pedidos/cancela',cancelaPedidosRestaurante.handle)



export {routes};