"use server";
import { blockUser, unblockUser } from "@/lib/block-service";
import { revalidatePath } from "next/cache";

export const onBlock = async (id: string) => {
  try {
    const blockedUser = await blockUser(id)
    // 屏蔽成功后重新获取数据
    if (blockedUser) {
      revalidatePath(`/${blockedUser.blocked.username}`)
    }
    return blockedUser
  } catch (error) {
    throw error
  }
}

export const onUnBlock = async (id: string) => {
  try {
    const unblockedUser = await unblockUser(id)
    // 取消屏蔽成功后重新获取数据
    if (unblockedUser) {
      revalidatePath(`/${unblockedUser.blocked.username}`)
    }
    return unblockedUser
  } catch (error) {
    throw error
  }
}