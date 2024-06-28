import Image from "next/image"
export const Logo = () => {
  return (
    <>
      <div>
        <Image src='/CloneTwitch.svg' alt="CloneTwitch" width={100} height={100}></Image>
        <div>CloneTwitch</div>
      </div>
    </>
  )
}
