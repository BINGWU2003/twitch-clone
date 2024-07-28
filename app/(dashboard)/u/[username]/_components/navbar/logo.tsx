/*
 * @Author: BINGWU
 * @Date: 2024-06-29 22:20:22
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-06-30 15:26:28
 * @FilePath: \twitch-clone\app\(browse)\_components\navbar\logo.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import Image from "next/image"
// 用于跳转
import Link from "next/link"
export const Logo = () => {
  return (
    <>
      {/* 点击logo跳转到首页 */}
      <Link href='/'>
        <div className="flex h-20 items-center">
          <Image src='/CloneTwitch.svg' alt="CloneTwitch" width={50} height={50}></Image>
          <div className="ml-4">
            <p className="text-2xl font-bold">Clone Twitch</p>
            <p className="text-sm text-[#737481]">创作者面板</p>
          </div>
        </div>
      </Link>

    </>
  )
}
