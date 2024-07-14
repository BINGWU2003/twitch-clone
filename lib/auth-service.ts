/*
 * @Author: BINGWU
 * @Date: 2024-07-13 14:02:18
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-07-14 18:48:37
 * @FilePath: \twitch-clone\lib\auth-service.ts
 * @Describe: 用户鉴权 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */

import { prisma } from "./db";
import { currentUser } from "@clerk/nextjs/server";
export const getSelf = async () => {
  // 当前登陆的用户
  const self = await currentUser();
  if (!self) {
    throw new Error("unAuthorized");
  }
  // 判断数据库中是否存在该用户
  const user = await prisma.user.findUnique({
    where: {
      externalUserId: self.id,
    },
  });
  if (!user) {
    throw new Error('User not found')
  }
  return user
}