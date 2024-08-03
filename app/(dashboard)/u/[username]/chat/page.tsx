
import { getStreamByUserId } from "@/lib/stream-service"
import { getSelf } from "@/lib/auth-service"
import { ToggleCard } from "./_components/toggle-card"

const ChatPage = async () => {
  const self = await getSelf()
  const stream = await getStreamByUserId(self.id)
  if (!stream) {
    throw new Error('Stream not found')
  }
  const toggleData = [
    {
      filed: 'isChatEnable' as const,
      label: '禁止聊天',
      value: stream.isChatEnable
    },
    {
      filed: 'isChatDelay' as const,
      label: '延迟聊天',
      value: stream.isChatDelay
    },
    {
      filed: 'isChatFollowersOnly' as const,
      label: '仅关注者聊天',
      value: stream.isChatFollowersOnly
    }
  ]
  return (
    <>
      <h1>聊天设置</h1>
      {toggleData.map((item, index) => {
        return <ToggleCard key={index} filed={item.filed} label={item.label} value={item.value}></ToggleCard>
      })}
    </>
  )
}
export default ChatPage