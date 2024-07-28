/*
 * @Author: BINGWU
 * @Date: 2024-06-30 16:35:19
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-07-28 21:57:14
 * @FilePath: \twitch-clone\app\(dashboard)\u\[username]\_components\navbar\actions.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server"
import { LogOut } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
export const Actions = async () => {
  const user = await currentUser();
  return (
    <>
      <div className="flex items-center">
        <Link href={'/'}>
          <Button variant={'ghost'}>
            <LogOut></LogOut>
            退出
          </Button>
        </Link>
        <div className="ml-6 flex items-center">
          <UserButton></UserButton>
        </div>
      </div>
    </>
  )
}