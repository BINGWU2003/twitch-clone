"use client";
import { User } from "@prisma/client";
import { UserItem } from "./user-item";
interface RecommendedProps {
  recommended: Array<User>;
}


export const Recommended = ({ recommended }: RecommendedProps) => {
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