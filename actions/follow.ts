"use server";
import { followUser,unfollowUser } from "@/lib/follow-service";
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

export const onUnfollow = async (id: string) => {
  try {
    const unfollowedUser = await unfollowUser(id)
    // 取消订阅成功后重新获取数据
    if (unfollowedUser) {
      revalidatePath(`/${unfollowedUser.following.username}`)
    }
    return unfollowedUser
  } catch (error) {
    throw error
  }
}