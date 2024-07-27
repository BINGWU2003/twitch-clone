/*
 * @Author: BINGWU
 * @Date: 2024-07-14 16:13:51
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-07-27 16:42:14
 * @FilePath: \twitch-clone\app\(browse)\[username]\page.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */

// username 对应文件夹的名称(相当于参数名)

import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import { Actions } from "./_components/actions";
import { isBlockingUser } from "@/lib/block-service";
// params 对应url的参数
interface UserPageProps {
  params: {
    username: string;
  }
}


export default async function UserPage({ params: { username } }: UserPageProps) {
  const user = await getUserByUsername(username);
  if (!user) {
    notFound();
  }
  const isFollowing = await isFollowingUser(user.id);
  const isBlocking = await isBlockingUser(user.id);
  if(isBlocking){
    // 如果被屏蔽了，就不显示
    // notFound();
  }
  return (
    <>
      <div>
        user page-{username}
      </div>
      <div>
        is Following: {isFollowing ? 'yes' : 'no'}
      </div>
      <div>
        is Blocking: {isBlocking ? 'yes' : 'no'}
      </div>
      <Actions isFollowing={isFollowing} id={user.id} isBlocking={isBlocking}></Actions>
    </>
  )
}
