/*
 * @Author: BINGWU
 * @Date: 2024-07-14 16:13:26
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-07-14 16:20:32
 * @FilePath: \twitch-clone\lib\user-service.ts
 * @Describe: 通过用户名来获取用户
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import { prisma } from "./db"
export const getUserByUsername = async (username: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username
      }
    })
    return user
  } catch (error) {
    return null
  }
}