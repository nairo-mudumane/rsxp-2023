import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function connectToDatabase(): Promise<void> {
  try {
    await prisma.$connect();
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
