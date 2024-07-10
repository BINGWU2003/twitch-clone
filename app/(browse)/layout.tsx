import Navbar from "./_components/navbar"
import Sidebar from "./_components/siderbar"
export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <div>
          <Sidebar></Sidebar>
          {children}
        </div>
      </div>
    </>
  )
}