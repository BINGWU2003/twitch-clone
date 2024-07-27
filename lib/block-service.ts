import { prisma } from "./db";
import { getSelf } from "./auth-service";
export const isBlockingUser = async (id: string) => {
  try {
    const self = await getSelf();
    const otherUser = await prisma.user.findUnique({
      where: {
        id
      }
    })

    if (!otherUser) {
      throw new Error('User not found')
    }
    if (self.id === id) {
      return false
    }
    const existingBlock = await prisma.block.findFirst({
      where: {
        blockerId: self.id,
        blockedId: id
      }
    })
    return !!existingBlock
  } catch (error) {
    return false
  }
}

export const blockUser = async (id: string) => {
  try {
    const self = await getSelf();
    const otherUser = await prisma.user.findUnique({
      where: {
        id
      }
    })
    if (!otherUser) {
      throw new Error('User not found')
    }
    if (self.id === id) {
      throw new Error('Cannot block yourself')
    }
    const existingBlock = await prisma.block.findFirst({
      where: {
        blockerId: self.id,
        blockedId: id
      }
    })
    if (existingBlock) {
      return
    }
    await prisma.block.create({
      data: {
        blockerId: self.id,
        blockedId: id
      }
    })
  } catch (error) {
    throw new Error('Block failed')
  }
}

export const unblockUser = async (id: string) => {
  try {
    const self = await getSelf();
    const otherUser = await prisma.user.findUnique({
      where: {
        id
      }
    })
    if (!otherUser) {
      throw new Error('User not found')
    }
    if (self.id === id) {
      throw new Error('Cannot unblock yourself')
    }
    await prisma.block.deleteMany({
      where: {
        blockerId: self.id,
        blockedId: id
      }
    })
  } catch (error) {
    throw new Error('Unblock failed')
  }
}