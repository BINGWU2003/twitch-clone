
import { prisma } from "./db";
import { getSelf } from "./auth-service";
export const getRecommended = async () => {
  let whereClause = {};
  try {
    const user = await getSelf();
    whereClause = {
      NOT: {
        externalUserId: user.externalUserId
      }
    }
  } catch (error) {
    whereClause = {};
  }
  return prisma.user.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    where: whereClause
  });
}