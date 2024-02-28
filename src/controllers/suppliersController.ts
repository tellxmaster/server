import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createSupplier = async (req: Request, res: Response) => {
  const { nombre, ubicacion_id, telefono, email } = req.body;
  try {
    const supplier = await prisma.suppliers.create({
      data: {
        nombre,
        ubicacion_id: parseInt(ubicacion_id),
        telefono,
        email,
      },
    });
    res.json(supplier);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const getAllSuppliers = async (req: Request, res: Response) => {
  try {
    const suppliers = await prisma.suppliers.findMany();
    res.json(suppliers);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const getSupplierById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const supplier = await prisma.suppliers.findUnique({ where: { id } });
    if (supplier) {
      res.json(supplier);
    } else {
      res.status(404).send('Supplier not found');
    }
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const updateSupplier = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { nombre, ubicacion_id, telefono, email } = req.body;
  try {
    const supplier = await prisma.suppliers.update({
      where: { id },
      data: {
        nombre,
        ubicacion_id: parseInt(ubicacion_id),
        telefono,
        email,
      },
    });
    res.json(supplier);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const deleteSupplier = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.suppliers.delete({ where: { id } });
    res.send('Supplier deleted successfully');
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
