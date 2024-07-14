import { Logo } from "./_components/logo";


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>

      <div className="flex justify-center h-full items-center flex-col">
        <Logo></Logo>
        {children}
      </div>
    </>
  )
}