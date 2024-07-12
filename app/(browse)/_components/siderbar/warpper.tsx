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
      <aside className={cn("w-60 bg-[#1f2029] h-full", { "w-20": collapsed })}>
        {children}
      </aside>
    </>
  )
}