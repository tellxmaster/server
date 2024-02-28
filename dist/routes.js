"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LocationsController = __importStar(require("./controllers/locationsController"));
const SuppliersController = __importStar(require("./controllers/suppliersController"));
const ProductsController = __importStar(require("./controllers/productsController"));
const router = express_1.default.Router();
// Locations Routes
router.post('/locations', LocationsController.createLocation);
router.get('/locations', LocationsController.getAllLocations);
router.get('/locations/:id', LocationsController.getLocationById);
router.put('/locations/:id', LocationsController.updateLocation);
router.delete('/locations/:id', LocationsController.deleteLocation);
// Suppliers Routes
router.post('/suppliers', SuppliersController.createSupplier);
router.get('/suppliers', SuppliersController.getAllSuppliers);
router.get('/suppliers/:id', SuppliersController.getSupplierById);
router.put('/suppliers/:id', SuppliersController.updateSupplier);
router.delete('/suppliers/:id', SuppliersController.deleteSupplier);
// Products Routes
router.post('/products', ProductsController.createProduct);
router.get('/products', ProductsController.getAllProducts);
router.get('/products/:id', ProductsController.getProductById);
router.put('/products/:id', ProductsController.updateProduct);
router.delete('/products/:id', ProductsController.deleteProduct);
exports.default = router;
