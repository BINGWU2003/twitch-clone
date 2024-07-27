import { getFollowersUsers } from "@/lib/follow-service"
import { UserItem } from "./user-item";


export const Following = async () => {
  const following = await getFollowersUsers()
  return (
    <>
      {
        following.length > 0 &&
        <div>
          <div className="flex justify-center items-center my-8">
            订阅的人
          </div>
          {
            following.map((user) => {
              return (
                <UserItem user={user.following} key={user.following.id} isLive={true}></UserItem>
              )
            })
          }
        </div>
      }
    </>
  )
}