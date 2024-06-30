import Image from "next/image"
export const Logo = () => {
  return (
    <>
      <div className="flex bg-[#252630] h-20 items-center px-4">
        <Image src='/CloneTwitch.svg' alt="CloneTwitch" width={50} height={50}></Image>
        <div className="ml-4">
          <p className="text-2xl font-bold">Clone Twitch</p>
          <p className="text-sm text-[#737481]">欢迎来到本站~</p>
        </div>
      </div>
    </>
  )
}
