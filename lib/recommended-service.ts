
import { prisma } from "./db";
import { getSelf } from "./auth-service";
export const getRecommended = async () => {
  let whereClause = {};
  try {
    const user = await getSelf();
    whereClause = {
      AND: [
        {
          NOT: {
            externalUserId: user.externalUserId
          }
        },
        {
          NOT: {
            followedBy: {
              some: {
                followerId: user.id
              }
            }
          }
        },
        {
          NOT: {
            blockedBy: {
              some: {
                blockerId: user.id
              }
            }
          }
        }
      ]

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