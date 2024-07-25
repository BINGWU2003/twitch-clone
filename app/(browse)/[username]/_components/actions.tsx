/*
 * @Author: BINGWU
 * @Date: 2024-07-14 17:07:08
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-07-25 17:58:42
 * @FilePath: \twitch-clone\app\(browse)\[username]\_components\actions.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
"use client";
import { Button } from "@/components/ui/button"
import { onFollow, onUnfollow } from "@/actions/follow"
import { useTransition } from "react";
import { Loader2 } from "lucide-react"
import { toastMessage } from "@/lib/toast-message";

interface ActionsProps {
  id: string;
  isFollowing: boolean;
}
export const Actions = ({ id, isFollowing }: ActionsProps) => {
  const [isPending, startTransition] = useTransition()
  const handleClick = () => {
    startTransition(() => {
      let errorMessage = ''
      let type = 'success'
      try {
        if (isFollowing) {
          onUnfollow(id)
          errorMessage = '取消订阅成功'
        } else {
          onFollow(id)
          errorMessage = '订阅成功'
        }

      } catch (error) {
        // 在这里对 error 进行类型断言
        errorMessage = error as string;
        type = 'error'
      }
      toastMessage(errorMessage, type)
    })
  }
  return (
    <div>
      <h1>Actions</h1>
      <Button onClick={handleClick} disabled={isPending}>
        {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <></>}
        {isFollowing ? '取消订阅' : '订阅'}</Button>
    </div>
  )
}