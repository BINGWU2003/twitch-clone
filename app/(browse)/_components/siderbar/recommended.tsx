
import { UserItem } from "./user-item";
import { getRecommended } from "@/lib/recommended-service"
export const Recommended = async () => {
  const recommended = await getRecommended()
  return (
    <>
      {
        recommended.map((user) => {
          return (
            <UserItem user={user} key={user.id} isLive={true}></UserItem>
          )
        })
      }
    </>
  )
}