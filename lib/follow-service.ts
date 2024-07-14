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




