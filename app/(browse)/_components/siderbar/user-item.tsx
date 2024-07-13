/*
 * @Author: BINGWU
 * @Date: 2024-07-13 14:58:31
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-07-13 22:18:08
 * @FilePath: \twitch-clone\app\(browse)\_components\siderbar\user-item.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
"use client";
import { User } from "@prisma/client"
import Link from "next/link";
import { Radio } from "lucide-react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton"
import { useSidebarStore } from "@/store/use-siderbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
interface UserItemProps {
  user: User;
  isLive: Boolean
}
export const UserItem = ({ user: { username, imageUrl }, isLive }: UserItemProps) => {
  const { collapsed } = useSidebarStore()
  return (
    <>
      <Link href={`/${username}`}>
        <div className={cn("flex justify-between items-center my-4 mx-6", {
          'justify-center': collapsed,
        })} >
          <div className="flex items-center">
            <Avatar className={cn("border-2 border-red-600", { 'border-0': !isLive })}>
              <AvatarImage src={imageUrl} />
              <AvatarFallback>{username}</AvatarFallback>
            </Avatar>
            {
              !collapsed && <div className="ml-2 text-sm">{username}</div>
            }
          </div>
          {
            !collapsed && <Radio className={cn("text-red-600", { "text-gray-300": !isLive })}></Radio>
          }
        </div>
      </Link>
    </>
  )
}

export const UserItemSkeleton = () => {
  const { collapsed } = useSidebarStore()
  return (

    [1, 2, 3, 4].map((item, index) => (
      <div className={cn("flex items-center p-4", {
        'justify-center': collapsed
      })} key={index}>
        <Skeleton className="h-12 w-12 rounded-full" />
        {
          !collapsed &&
          <div className="space-y-2 ml-4">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-4 w-28" />
          </div>
        }
      </div>
    ))
  )
}