/*
 * @Author: BINGWU
 * @Date: 2024-07-07 13:02:27
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-07-13 14:50:05
 * @FilePath: \twitch-clone\app\(browse)\_components\siderbar\warpper.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
"use client";
import { useSidebarStore } from "@/store/use-siderbar";
import { cn } from "@/lib/utils";
interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children
}: WrapperProps) => {
  const { collapsed } = useSidebarStore();

  return (
    <>
    {/* 折叠的时候使用添加"w-20"的类名 */}
      <aside className={cn("w-60 bg-[#1f2029] h-full", { "w-28": collapsed })}>
        {children}
      </aside>
    </>
  )
}