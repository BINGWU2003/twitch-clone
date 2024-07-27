/*
 * @Author: BINGWU
 * @Date: 2024-07-14 16:13:26
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-07-14 18:51:16
 * @FilePath: \twitch-clone\lib\follow-service.ts
 * @Describe: 订阅相关的接口
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */

import { prisma } from "./db";
import { getSelf } from "./auth-service";
export const isFollowingUser = async (id: string) => {
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
      return true
    }
    const existingFollow = await prisma.follow.findFirst({
      where: {
        followerId: self.id,
        followingId: id
      }
    })
    return !!existingFollow
  } catch (error) {
    return false
  }
}

export const getFollowersUsers = async () => {
  try {
    const self = await getSelf();
    const followers = await prisma.follow.findMany({
      where: {
        followerId: self.id
      },
      include: {
        following: true
      }
    })
    return followers
  } catch (error) {
    return []
  }
}

export const followUser = async (id: string) => {

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
      throw new Error('Cannot follow yourself')
    }
    const existingFollow = await prisma.follow.findFirst({
      where: {
        followerId: self.id,
        followingId: id
      }
    })
    if (existingFollow) {
      throw new Error('Already following')
    }
    return await prisma.follow.create({
      data: {
        followerId: self.id,
        followingId: id
      },
      include: {
        following: true,
        follower: true
      }
    })
  } catch (error) {
    console.log(error);

    throw error
  }
}

export const unfollowUser = async (id: string) => {
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
      throw new Error('Cannot unfollow yourself')
    }
    const existingFollow = await prisma.follow.findFirst({
      where: {
        followerId: self.id,
        followingId: id
      }
    })
    if (!existingFollow) {
      throw new Error('Not following')
    }
    return await prisma.follow.delete({
      where: {
        id: existingFollow.id
      },
      include: {
        following: true,
        follower: true
      }
    })
  } catch (error) {
    throw error
  }
}