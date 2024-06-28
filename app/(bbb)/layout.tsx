/*
 * @Author: BINGWU
 * @Date: 2024-06-28 23:23:59
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-06-28 23:26:07
 * @FilePath: \twitch-clone\app\(bbb)\layout.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */



export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>

      <div>
        <div>导航栏</div>
        {children}
      </div>
    </>
  )
}