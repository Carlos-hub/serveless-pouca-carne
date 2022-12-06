import { Router } from "express"
import { isAuthenticate } from "./middleware/isAuthenticate";

// Authenticate
import { AuthenticateClientController } from "./modules/account/authenticateClient/authenticateClientController";

// Entregador
import { CreateEntregadorController } from "./modules/entregador/useCase/createEntegrador/createEntregadorController";

// Restaurante
import { AprovaPedidosController } from "./modules/restaurante/UseCase/aprovePedidos/AprovaPedidosController";
import { CancelaPedidosRestauranteController } from "./modules/restaurante/UseCase/cancelaPedidos/CancelaPedidosController";
import { CreateProdutosController } from "./modules/restaurante/UseCase/createProdutos/createProdutosController";
import { GetProdutosController } from "./modules/restaurante/UseCase/getProdutos/getProdutosController";


// client
import { CancelaPedidosController } from "./modules/cliente/useCases/cancelaPedidos/CancelaPedidosController";
import { CreateClientController } from "./modules/cliente/useCases/createClient/createClientController";
import { CreateDeliveryController } from "./modules/cliente/useCases/createDelivery/createDeliveryController";
import { GetDataClientController } from "./modules/cliente/useCases/getDataClient/getDataClientController";
import { GetProdutosClientController } from "./modules/cliente/useCases/getProdutos/getProdutosClientController";
import { GetPedidosController } from "./modules/restaurante/UseCase/getPedidos/getPedidosController";


// Restaurante
const createClientController = new CreateClientController();
const createEntregadorController = new CreateEntregadorController();
const authenticateClientController = new AuthenticateClientController();
const createProdutosController = new CreateProdutosController();
const getDelivery = new GetProdutosClientController();
const aprovaPedidosController = new AprovaPedidosController();
const cancelaPedidosRestaurante = new CancelaPedidosRestauranteController();
const getProdutosController = new GetProdutosController();
const getPedidosController = new GetPedidosController();

// Client
const cancelaPedidos = new CancelaPedidosController(); 
const getProdutos = new GetProdutosController();
const createDeliveryController = new CreateDeliveryController();
const getDataClientController = new GetDataClientController();


const routes = Router();
// entregador
routes.post('/entregador/signup',createEntregadorController.handle);

// Client
routes.post('/client/signup', createClientController.handle);
routes.post('/client/login',authenticateClientController.handle);
routes.post('/client/delivery',isAuthenticate,createDeliveryController.handle);
routes.get('/client/produtos', getDelivery.handle);
routes.post('/client/cancela',isAuthenticate,cancelaPedidos.handle);
routes.post('/client/data',isAuthenticate,getDataClientController.handle);

// Restaurante
routes.post('/company/produto/signup',createProdutosController.handle);
routes.post('/company/pedidos/aprove',isAuthenticate,aprovaPedidosController.handle);
routes.get('/company/produtos/list',isAuthenticate,getProdutosController.handle);
routes.post('/company/pedidos/cancela',isAuthenticate,cancelaPedidosRestaurante.handle);
routes.get('/company/pedidos/',getPedidosController.handle)


export {routes};