import express from 'express';
import * as LocationsController from './controllers/locationsController';
import * as SuppliersController from './controllers/suppliersController';
import * as ProductsController from './controllers/productsController';

const router = express.Router();

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

export default router;
