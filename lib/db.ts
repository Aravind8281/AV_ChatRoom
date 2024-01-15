import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// Check if prisma is not undefined and isConnected is true
if (globalThis.prisma && globalThis.prisma.$connect) {
  globalThis.prisma.$connect()
    .then(() => {
      console.log("Prisma connected successfully");
    })
    .catch((error) => {
      console.error("Error connecting to Prisma:", error);
    });
}

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
