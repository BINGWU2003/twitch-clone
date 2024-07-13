
import { Toggle } from "./toggle"
import { Wrapper } from "./warpper"
import { Recommended } from "./recommended"
import { Suspense } from "react"
import { UserItemSkeleton } from "./user-item"
export default async function Sidebar() {
  return (
    <>
      <Wrapper>
        <Suspense fallback={<UserItemSkeleton />}>
          <Toggle ></Toggle>
          <Recommended></Recommended>
        </Suspense>
      </Wrapper>
    </>
  )
}
