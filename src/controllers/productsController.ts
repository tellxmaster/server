import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createProduct = async (req: Request, res: Response) => {
  const { nombre, descripcion, cantidad, categoria, proveedor_id, fecha_cosecha, costo_unitario } = req.body;
  try {
    const product = await prisma.products.create({
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
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.products.findMany();
    res.json(products);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const product = await prisma.products.findUnique({ where: { id } });
    if (product) {
      res.json(product);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { nombre, descripcion, cantidad, categoria, proveedor_id, fecha_cosecha, costo_unitario } = req.body;
  try {
    const product = await prisma.products.update({
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
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.products.delete({ where: { id } });
    res.send('Product deleted successfully');
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
