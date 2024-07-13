
import { Toggle } from "./toggle"
import { Wrapper } from "./warpper"
import { Recommended } from "./recommended"
import { getRecommended } from "@/lib/recommended-service"
export default async function Sidebar() {
  const recommended = await getRecommended()
  return (
    <>
      <Wrapper>
        <Toggle></Toggle>
        <Recommended recommended={recommended}></Recommended>
      </Wrapper>
    </>
  )
}
