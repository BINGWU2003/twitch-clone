import Link from "next/link";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server"
import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { Clapperboard } from "lucide-react";
export const Actions = async () => {
  const user = await currentUser();
  return (
    <>
      <div>
        {
          !user && (
            <Button>
              <SignInButton></SignInButton>
            </Button>
          )
        }
        {
          user && (
            <div className="flex items-center">
              <Link href={`/u/${user.username}`}>
                <div className="flex items-center">
                  <Clapperboard></Clapperboard>
                  <div className="ml-2 text-sm">控制面板</div>
                </div>
              </Link>
              <div className="ml-6 flex items-center">
                <UserButton></UserButton>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}