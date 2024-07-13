
import { prisma } from "./db";

export const getRecommended = async () => {
  const recommended = await prisma.user.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });
  return recommended
}