import Navbar from "./_components/navbar"
import Sidebar from "./_components/siderbar"
import { Container } from "./_components/container/container"
export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <div className="h-full">
        <Navbar></Navbar>
        <div className="h-full flex">
          <Sidebar></Sidebar>
          <Container>
            {children}
          </Container>
        </div>
      </div>
    </>
  )
}