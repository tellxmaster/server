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
exports.deleteSupplier = exports.updateSupplier = exports.getSupplierById = exports.getAllSuppliers = exports.createSupplier = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createSupplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, ubicacion_id, telefono, email } = req.body;
    try {
        const supplier = yield prisma.suppliers.create({
            data: {
                nombre,
                ubicacion_id: parseInt(ubicacion_id),
                telefono,
                email,
            },
        });
        res.json(supplier);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.createSupplier = createSupplier;
const getAllSuppliers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const suppliers = yield prisma.suppliers.findMany();
        res.json(suppliers);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.getAllSuppliers = getAllSuppliers;
const getSupplierById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const supplier = yield prisma.suppliers.findUnique({ where: { id } });
        if (supplier) {
            res.json(supplier);
        }
        else {
            res.status(404).send('Supplier not found');
        }
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.getSupplierById = getSupplierById;
const updateSupplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { nombre, ubicacion_id, telefono, email } = req.body;
    try {
        const supplier = yield prisma.suppliers.update({
            where: { id },
            data: {
                nombre,
                ubicacion_id: parseInt(ubicacion_id),
                telefono,
                email,
            },
        });
        res.json(supplier);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.updateSupplier = updateSupplier;
const deleteSupplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        yield prisma.suppliers.delete({ where: { id } });
        res.send('Supplier deleted successfully');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.deleteSupplier = deleteSupplier;
