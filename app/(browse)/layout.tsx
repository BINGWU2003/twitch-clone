import Navbar from "./_components/navbar"

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <div>
        <Navbar></Navbar>
        {children}
      </div>
    </>
  )
}