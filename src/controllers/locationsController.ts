import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createLocation = async (req: Request, res: Response) => {
  const { lat, lon } = req.body;
  try {
    const location = await prisma.locations.create({
      data: { lat, lon },
    });
    res.json(location);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const getAllLocations = async (req: Request, res: Response) => {
  try {
    const locations = await prisma.locations.findMany();
    res.json(locations);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const getLocationById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const location = await prisma.locations.findUnique({ where: { id } });
    if (location) {
      res.json(location);
    } else {
      res.status(404).send('Location not found');
    }
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const updateLocation = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { lat, lon } = req.body;
  try {
    const location = await prisma.locations.update({
      where: { id },
      data: { lat, lon },
    });
    res.json(location);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const deleteLocation = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.locations.delete({ where: { id } });
    res.send('Location deleted successfully');
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
