/*
 * @Author: BINGWU
 * @Date: 2024-06-29 22:09:30
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-07-13 13:49:47
 * @FilePath: \twitch-clone\app\(browse)\layout.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import Navbar from "./_components/navbar"
import Sidebar from "./_components/siderbar"
import { Container } from "./_components/container/container"
export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <div className="h-full flex flex-col">
        <Navbar></Navbar>
        <div className="h-auto flex flex-1">
          <Sidebar></Sidebar>
          <Container>
            {children}
          </Container>
        </div>
      </div>
    </>
  )
}