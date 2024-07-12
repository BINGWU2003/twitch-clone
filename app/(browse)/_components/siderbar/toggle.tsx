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
        <div className="flex justify-end p-4">
          <Hint label="折叠侧边栏">
            <Button variant='ghost' onClick={toggleSidebar}>
              <ArrowLeftFromLine size={16} />
            </Button>
          </Hint>
        </div>}
      {
        collapsed &&
        <div className="flex justify-center p-2">
          <Hint label="展开侧边栏">
            <Button variant='ghost' onClick={toggleSidebar}>
              <ArrowRightFromLine size={16} />
            </Button>
          </Hint>

        </div>}
    </>
  )
}