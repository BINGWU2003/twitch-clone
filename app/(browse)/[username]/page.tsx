
// username 对应文件夹的名称(相当于参数名)

import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import { Actions } from "./_components/actions";
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
  return (
    <>
      <div>
        user page-{username}
      </div>
      <div>
        is Following: {isFollowing ? 'yes' : 'no'}
      </div>
      <Actions isFollowing={isFollowing} id={user.id}></Actions>
    </>
  )
}
