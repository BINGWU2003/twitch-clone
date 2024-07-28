"use client";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/use-siderbar";
interface NavItemProps {
  label: string;
  icon: LucideIcon;
  href: string;
  isActive: boolean;
}

export const NavItem = ({ label, icon: Icon, href, isActive }: NavItemProps) => {
  const { collapsed } = useSidebarStore()
  return (
    <>
      <Link href={href}>
        <div className={cn("flex items-center p-4 text-[#aaa]", isActive && "text-[fff]", collapsed && 'justify-center')}>
          <Icon></Icon>
          {
            !collapsed && <div className="ml-8">{label}</div>
          }
        </div>
      </Link>
    </>
  )
}