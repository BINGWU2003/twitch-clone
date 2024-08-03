"use server";
import { prisma } from "@/lib/db";
import { Stream } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { getSelf } from "@/lib/auth-service";
export const updateStream = async (values: Partial<Stream>) => {
  try {
    const self = await getSelf();
    const selfStream = await prisma.stream.findUnique({
      where: {
        userId: self.id,
      },
    });
    if (!selfStream) {
      throw new Error("Stream not found");
    }
    const vaildData = {
      name: values.name,
      isChatEnable: values.isChatEnable,
      isChatDelay: values.isChatDelay,
      isChatFollowersOnly: values.isChatFollowersOnly,
    }
    const stream = await prisma.stream.update({
      where: {
        id: selfStream.id
      },
      data: {
        ...vaildData
      }
    })
    revalidatePath(`/u/${self.username}`)
    revalidatePath(`/u/${self.username}/chat`)
    // 刷新订阅页面
    revalidatePath(`/${self.username}`)
    return stream
  } catch {
    throw new Error('内部错误')
  }
}