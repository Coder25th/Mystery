"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User } from "next-auth";
import { Button } from "./ui/button";

const Navbar = () => {
  const { data: session } = useSession();
  const user: User = session?.user as User;

  return (
    <nav className="p-4 md:p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center bg-transparent text-white">
        <Link className="text-xl font-bold mb-4 md:mb-0" href="/">
          Mystery Message
        </Link>
        <div className="flex items-center justify-evenly w-[30%]">
          <Link href="/dashboard" className="text-bold">
            Dashboard
          </Link>
          {session ? (
            <>
              <span className="mr-4">
                Welcome, {user?.username || user?.email}
              </span>
              <Button
                className="w-full md:w-auto"
                variant="destructive"
                onClick={() => signOut()}
              >
                Logout
              </Button>
            </>
          ) : (
            <Link href="/sign-in">
              <Button className="w-full md:w-auto bg-blue-800">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
