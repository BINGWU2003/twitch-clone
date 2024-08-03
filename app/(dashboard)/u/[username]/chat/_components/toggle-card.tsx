"use client";
import { Switch } from "@/components/ui/switch"
import { useTransition } from "react";
interface ToggleCardProps {
  label: string;
  value: boolean;
  filed: "isChatEnable" | "isChatDelay" | "isChatFollowersOnly";
}
import { updateStream } from "@/actions/stream";
import { toastMessage } from "@/lib/toast-message";
export const ToggleCard = ({ label, value = false, filed }: ToggleCardProps) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    let errorMessage = ''
    let type = 'success'
    startTransition(async () => {
      try {
        await updateStream({
          [filed]: !value
        })
        const type = value ? '关闭' : '开启'
        const errorMessageType = {
          isChatEnable: `${type}禁止聊天`,
          isChatDelay: `${type}延迟聊天`,
          isChatFollowersOnly: `${type}仅关注者聊天`,
        }
        errorMessage = errorMessageType[filed]
      } catch (error) {
        errorMessage = error as string;
        type = 'error'
      }
      toastMessage(errorMessage, type)
    })
  }
  return (
    <div className="flex items-center bg-[#252931] h-20 justify-between p-10 rounded-2xl my-4">
      <div> {label}</div>
      <Switch onClick={handleClick} disabled={isPending} checked={value} />
    </div>
  )
}