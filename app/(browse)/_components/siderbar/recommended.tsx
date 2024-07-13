
import { UserItem } from "./user-item";
import { getRecommended } from "@/lib/recommended-service"
import { User } from "@prisma/client";
export const Recommended = async () => {
  const recommended = await getRecommended()
  return (
    <>
      {
        recommended.map((user: User) => {
          return (
            <UserItem user={user} key={user.id} isLive={true}></UserItem>
          )
        })
      }
    </>
  )
}