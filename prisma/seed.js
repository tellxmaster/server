// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Seed para la tabla locations
  const location = await prisma.locations.create({
    data: {
      lat: 40.712776,
      lon: -74.005974,
    },
  });

  // Seed para la tabla suppliers
  const supplier = await prisma.suppliers.create({
    data: {
      nombre: 'Proveedor XYZ',
      ubicacion_id: location.id,
      telefono: '1234567890',
      email: 'contacto@proveedorxyz.com',
    },
  });

  // Seed para la tabla products
  await prisma.products.create({
    data: {
      nombre: 'Producto ABC',
      descripcion: 'Descripción del producto ABC',
      cantidad: 100,
      categoria: 'Categoría 1',
      proveedor_id: supplier.id,
      fecha_cosecha: new Date('2023-01-01'),
      costo_unitario: 10.50,
    },
  });

  console.log('Seeding completado.');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
