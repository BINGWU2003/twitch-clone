"use client";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
interface ContainerProps {
  children: React.ReactNode;
}
import { useSidebarStore } from "@/store/use-siderbar";
export const Container = ({ children }: ContainerProps) => {
  const { toggleSidebar } = useSidebarStore()
  const matches = useMediaQuery('(max-width: 1024px)')
  // 监听设备宽度,大于1024px就展开侧边栏
  useEffect(() => {
    toggleSidebar()
  }, [matches, toggleSidebar])
  return (
    <>
      <div className="flex-1 p-4">
        {children}
      </div>
    </>
  )
}