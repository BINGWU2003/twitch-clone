"use server";
import { followUser } from "@/lib/follow-service";
import { revalidatePath } from "next/cache";

export const onFollow = async (id: string) => {
  try {
    const followedUser = await followUser(id)
    // 订阅成功后重新获取数据
    if (followedUser) {
      revalidatePath(`/${followedUser.following.username}`)
    }
    return followedUser
  } catch (error) {
    throw error
  }
}