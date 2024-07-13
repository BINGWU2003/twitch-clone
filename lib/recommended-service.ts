
import { prisma } from "./db";

export const getRecommended = async () => {
  await new Promise((resolve) => setTimeout(resolve, 8000));
  const recommended = await prisma.user.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });
  return recommended
}