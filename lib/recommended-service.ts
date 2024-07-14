
import { prisma } from "./db";
import { getSelf } from "./auth-service";
export const getRecommended = async () => {
  try {
    const user = await getSelf();
    const whereClause = user ? {
      NOT: {
        externalUserId: user.externalUserId
      }
    } : {};
    return prisma.user.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      where: whereClause
    });
  } catch (error) {
    return []
  }
}