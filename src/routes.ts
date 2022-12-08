import { Router } from "express"
import { isAuthenticate } from "./middleware/isAuthenticate";

// Authenticate
import { AuthenticateClientController } from "./modules/account/authenticateClient/authenticateClientController";


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
import { CreateEnderecoController } from "./modules/cliente/useCases/createEndereco/createEnderecoController";
import { GetPedidosClientController } from "./modules/cliente/useCases/getPedidos/getPedidosClientController";
import { AuthenticateRestauranteController } from "./modules/account/authenticaterestaurante/authenticateRestauranteController";


// Restaurante
const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createProdutosController = new CreateProdutosController();
const aprovaPedidosController = new AprovaPedidosController();
const cancelaPedidosRestaurante = new CancelaPedidosRestauranteController();
const getProdutosController = new GetProdutosController();
const getPedidos = new GetPedidosController();
const authenticateRestaurante = new AuthenticateRestauranteController();

// Client
const cancelaPedidos = new CancelaPedidosController(); 
const getProdutos = new GetProdutosController();
const createDeliveryController = new CreateDeliveryController();
const getDataClientController = new GetDataClientController();
const createEndereco = new CreateEnderecoController();
const getPedidosClientController = new GetPedidosClientController();

const routes = Router();
// entregador

// Client
routes.post('/client/signup', createClientController.handle);
routes.post('/client/login',authenticateClientController.handle);
routes.post('/client/delivery',isAuthenticate,createDeliveryController.handle);
routes.get('/client/produtos', getProdutos.handle);
routes.post('/client/cancela',isAuthenticate,cancelaPedidos.handle);
routes.get('/client/data',isAuthenticate,getDataClientController.handle);
routes.post('/client/endereco',isAuthenticate,createEndereco.handle);
routes.get('/client/pedidos',isAuthenticate,getPedidos.handle)

// Restaurante
routes.post('/company/produto/signup',createProdutosController.handle);
routes.post('/company/pedidos/aprove',isAuthenticate,aprovaPedidosController.handle);
routes.get('/company/produtos/list',isAuthenticate,getProdutosController.handle);
routes.post('/company/pedidos/cancela',isAuthenticate,cancelaPedidosRestaurante.handle);
routes.get('/company/pedidos/',isAuthenticate,getPedidos.handle);
routes.post('/company/login',authenticateRestaurante.handle)


export {routes};