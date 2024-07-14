
// username 对应文件夹的名称(相当于参数名)
// params 对应url的参数
interface UserPageProps {
  params: {
    username: string;
  }
}


export default function UserPage({ params: { username } }: UserPageProps) {
  return (
    <>
      <div>
        user page-{username}
      </div>
    </>
  )
}
