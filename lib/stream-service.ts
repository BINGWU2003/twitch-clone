import { prisma } from "./db";

export const getStreamByUserId = async (userId: string) => {
  return await prisma.stream.findUnique({
    where: {
      userId
    }
  })
}