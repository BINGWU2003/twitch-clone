
import { Toggle } from "./toggle"
import { Wrapper } from "./warpper"
import { Navigation } from "./navgation"
export default async function Sidebar() {
  return (
    <>
      <Wrapper>
        {/* 骨架屏 */}
        <Toggle ></Toggle>
        <Navigation></Navigation>
      </Wrapper>
    </>
  )
}
