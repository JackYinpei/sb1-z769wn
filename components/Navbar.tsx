"use client"

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Film, Home, Info } from 'lucide-react';
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession()

  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-white text-2xl font-bold">MovieStream</Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-300 hover:text-white flex items-center">
              <Home className="mr-1 h-4 w-4" />
              HOME
            </Link>
            <Link href="/movies" className="text-gray-300 hover:text-white flex items-center">
              <Film className="mr-1 h-4 w-4" />
              MOVIES
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white flex items-center">
              <Info className="mr-1 h-4 w-4" />
              ABOUT
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <Button variant="ghost" className="text-gray-300 hover:text-white" onClick={() => signOut()}>
                Sign Out
              </Button>
              <Avatar>
                <AvatarImage src={session.user?.image || undefined} alt={session.user?.name || "User"} />
                <AvatarFallback>{session.user?.name?.[0] || "U"}</AvatarFallback>
              </Avatar>
            </>
          ) : (
            <Button variant="ghost" className="text-gray-300 hover:text-white" onClick={() => signIn("google")}>
              Sign In
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;