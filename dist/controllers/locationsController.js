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
exports.deleteLocation = exports.updateLocation = exports.getLocationById = exports.getAllLocations = exports.createLocation = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { lat, lon } = req.body;
    try {
        const location = yield prisma.locations.create({
            data: { lat, lon },
        });
        res.json(location);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.createLocation = createLocation;
const getAllLocations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const locations = yield prisma.locations.findMany();
        res.json(locations);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.getAllLocations = getAllLocations;
const getLocationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const location = yield prisma.locations.findUnique({ where: { id } });
        if (location) {
            res.json(location);
        }
        else {
            res.status(404).send('Location not found');
        }
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.getLocationById = getLocationById;
const updateLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { lat, lon } = req.body;
    try {
        const location = yield prisma.locations.update({
            where: { id },
            data: { lat, lon },
        });
        res.json(location);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.updateLocation = updateLocation;
const deleteLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        yield prisma.locations.delete({ where: { id } });
        res.send('Location deleted successfully');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.deleteLocation = deleteLocation;
