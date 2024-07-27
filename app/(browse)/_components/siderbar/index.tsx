
import { Toggle } from "./toggle"
import { Wrapper } from "./warpper"
import { Recommended } from "./recommended"
import { Following } from "./following"
import { Suspense } from "react"
import { UserItemSkeleton } from "./user-item"
export default async function Sidebar() {
  return (
    <>
      <Wrapper>
        {/* 骨架屏 */}
        <Suspense fallback={<UserItemSkeleton />}>
          <Toggle ></Toggle>
          <Recommended></Recommended>
          <Following></Following>
        </Suspense>
      </Wrapper>
    </>
  )
}
