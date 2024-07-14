"use client";
import { Button } from "@/components/ui/button"
import { onFollow } from "@/actions/follow"
import { useTransition } from "react";

import { toastMessage } from "@/lib/toast-message";

interface ActionsProps {
  id: string;
  isFollowing: boolean;
}
export const Actions = ({ id, isFollowing }: ActionsProps) => {
  const [isPending, startTransition] = useTransition()
  const handleClick = () => {
    startTransition(async () => {
      let errorMessage = ''
      let type = 'success'
      try {
        const data = await onFollow(id)
        console.log(data);
        errorMessage = '订阅成功'
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
      <Button onClick={handleClick} disabled={isFollowing || isPending}>click</Button>
    </div>
  )
}