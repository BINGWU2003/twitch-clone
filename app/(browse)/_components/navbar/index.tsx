/*
 * @Author: BINGWU
 * @Date: 2024-06-29 22:12:24
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-06-30 15:47:17
 * @FilePath: \twitch-clone\app\(browse)\_components\navbar\index.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import { Logo } from "./logo"
import { Search } from "./search"
import { Actions } from "./actions"
export default function Navbar() {
  return (
    <>
      <div className="flex items-center bg-[#252630] justify-between px-6">
        <Logo></Logo>
        <Search></Search>
        <Actions></Actions>
      </div>
    </>
  )
}