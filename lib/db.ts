import { PrismaClient } from "@prisma/client";
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
/**
  避免重复实例化：在开发环境中，热重载（Hot Module Replacement，HMR）可能会导致代码多次执行，
  从而创建多个PrismaClient实例。通过使用全局变量global.prisma，可以确保只创建一个实例。
  环境区分：在生产环境中，每次启动应用都会创建一个新的PrismaClient实例，而不会使用全局变量。
  这是因为生产环境通常不涉及频繁的重载，不需要考虑实例重复的问题。
 */