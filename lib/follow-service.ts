/*
 * @Author: BINGWU
 * @Date: 2024-07-14 16:13:26
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-07-14 16:17:55
 * @FilePath: \twitch-clone\lib\follow-service.ts
 * @Describe: 判断是不是订阅的用户
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
    
    if(!otherUser){
      throw new Error('User not found')
    }
    console.log('otherUser', otherUser);
    const existingFollow = await prisma.follow.findFirst({
      where: {
        followerId: self.id,
        followingId: id
      }
    })
    console.log('existingFollow', existingFollow);
    return !!existingFollow
  } catch (error) {
    return false
  }
}




