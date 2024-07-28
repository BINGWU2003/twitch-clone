"use client";
import { useUser } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import {
  Fullscreen,
  KeyRound,
  MessageSquare,
  Users
} from "lucide-react"
import { NavItem } from "./nav-item"

export const Navigation =() => {
  const { user } = useUser()
  // console.log(user.username);
  
  const pathname = usePathname()
  const routes = [
    {
      labeL: 'Stream',
      icon: Fullscreen,
      href: `/u/${user?.username}`
    },
    {
      labeL: 'Keys',
      icon: KeyRound,
      href: `/u/${user?.username}/keys`
    },
    {
      labeL: 'Chat',
      icon: MessageSquare,
      href: `/u/${user?.username}/chat`
    },
    {
      labeL: 'Community',
      icon: Users,
      href: `/u/${user?.username}/community`
    }
  ]
  return (
    <>
      {routes.map((route) =>
        <NavItem
          key={route.href}
          icon={route.icon}
          label={route.labeL}
          href={route.href}
          isActive={pathname === route.href}>
        </NavItem>)
      }
    </>
  )
}