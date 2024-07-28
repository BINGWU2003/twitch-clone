import Navbar from "./_components/navbar";
import Sidebar from "./_components/siderbar";
import { Container } from "./_components/container/container";
interface CreatorLayoutProps {
  params: {
    username: string;
  },
  children: React.ReactNode
}


const CreatorLayout = ({ children, params: { username } }: CreatorLayoutProps) => {
  return (
    <>
      <div className="h-full flex flex-col">
        <Navbar></Navbar>
        <div className="h-auto flex flex-1">
          <Sidebar></Sidebar>
          <Container>
            {children}
          </Container>
        </div>
      </div>
    </>
  )
}

export default CreatorLayout