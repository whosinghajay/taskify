import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b- shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center sm:w-[80%] w-full justify-between">
        <Logo />
        <div className="space-x-4 block w-auto">
          <Button size={"own"} variant={"outline"} asChild>
            <Link href={"/sign-in"}>Login</Link>
          </Button>
          <Button size={"own"} asChild>
            <Link href={"/sign-up"}>Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
