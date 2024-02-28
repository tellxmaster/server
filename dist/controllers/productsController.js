"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.getAllProducts = exports.createProduct = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, descripcion, cantidad, categoria, proveedor_id, fecha_cosecha, costo_unitario } = req.body;
    try {
        const product = yield prisma.products.create({
            data: {
                nombre,
                descripcion,
                cantidad: parseInt(cantidad),
                categoria,
                proveedor_id: parseInt(proveedor_id),
                fecha_cosecha: fecha_cosecha ? new Date(fecha_cosecha) : undefined,
                costo_unitario,
            },
        });
        res.json(product);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.createProduct = createProduct;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield prisma.products.findMany();
        res.json(products);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const product = yield prisma.products.findUnique({ where: { id } });
        if (product) {
            res.json(product);
        }
        else {
            res.status(404).send('Product not found');
        }
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.getProductById = getProductById;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { nombre, descripcion, cantidad, categoria, proveedor_id, fecha_cosecha, costo_unitario } = req.body;
    try {
        const product = yield prisma.products.update({
            where: { id },
            data: {
                nombre,
                descripcion,
                cantidad: parseInt(cantidad),
                categoria,
                proveedor_id: parseInt(proveedor_id),
                fecha_cosecha: fecha_cosecha ? new Date(fecha_cosecha) : undefined,
                costo_unitario,
            },
        });
        res.json(product);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        yield prisma.products.delete({ where: { id } });
        res.send('Product deleted successfully');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.deleteProduct = deleteProduct;
