/*
 * @Author: BINGWU
 * @Date: 2024-07-14 17:07:08
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-07-27 17:15:57
 * @FilePath: \twitch-clone\app\(browse)\[username]\_components\actions.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
"use client";
import { Button } from "@/components/ui/button"
import { onFollow, onUnfollow } from "@/actions/follow"
import { useTransition, useState } from "react";
import { Loader2 } from "lucide-react"
import { toastMessage } from "@/lib/toast-message";
import { onBlock, onUnBlock } from "@/actions/block";

interface ActionsProps {
  id: string;
  isFollowing: boolean;
  isBlocking: boolean;
}
export const Actions = ({ id, isFollowing, isBlocking }: ActionsProps) => {
  const [isPending, startTransition] = useTransition()
  const [clickFlag, setClickFlag] = useState('')

  const handleFollow = () => {
    setClickFlag('follow')
    startTransition(async () => {
      let errorMessage = ''
      let type = 'success'
      try {
        if (isFollowing) {
          await onUnfollow(id)
          errorMessage = '取消订阅成功'
        } else {
          await onFollow(id)
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
  const handleBlock = () => {
    setClickFlag('block')
    startTransition(async () => {
      let errorMessage = ''
      let type = 'success'
      try {
        if (isBlocking) {
          await onUnBlock(id)
          errorMessage = '取消屏蔽成功'
        } else {
          await onBlock(id)
          errorMessage = '屏蔽成功'
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
      <Button onClick={handleFollow} disabled={isPending}>
        {(isPending && clickFlag === 'follow') ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <></>}
        {isFollowing ? '取消订阅' : '订阅'}
      </Button>
      <Button variant="destructive" className="ml-4" onClick={handleBlock} disabled={isPending}>
        {(isPending && clickFlag === 'block') ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <></>}
        {isBlocking ? '取消屏蔽' : '屏蔽'}
      </Button>
    </div>
  )
}