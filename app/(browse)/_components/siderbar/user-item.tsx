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
      <Link href={''}>
        <div className={cn("flex justify-between items-center my-2 mx-6", {
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
  return (
    <Skeleton className="w-[100px] h-[20px] rounded-full" />
  )
}