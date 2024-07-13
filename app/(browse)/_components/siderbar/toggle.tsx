/*
 * @Author: BINGWU
 * @Date: 2024-07-12 23:17:49
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-07-13 15:50:27
 * @FilePath: \twitch-clone\app\(browse)\_components\siderbar\toggle.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
"use client";
import { useSidebarStore } from "@/store/use-siderbar"
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hint } from "./hitn";
export const Toggle = () => {
  const { toggleSidebar, collapsed } = useSidebarStore()
  return (
    <>
      {!collapsed &&
        <div className="flex justify-end p-4 items-center">
          <p className="mr-6">为你推荐</p>
          <Hint label="折叠侧边栏">
            <Button variant='ghost' onClick={toggleSidebar}>
              <ArrowLeftFromLine size={16} />
            </Button>
          </Hint>
        </div>}
      {
        collapsed &&
        <div className="flex justify-center p-4">
          <Hint label="展开侧边栏">
            <Button variant='ghost' onClick={toggleSidebar}>
              <ArrowRightFromLine size={16} />
            </Button>
          </Hint>

        </div>}
    </>
  )
}