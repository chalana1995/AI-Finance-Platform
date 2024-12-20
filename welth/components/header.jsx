import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from 'react'

const Header = () => {
  return (
    <div className="fixed top-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <Image src={"/logo.png"} alt="welth logo" height={60} width={200} className="h-12 w-auto object-contain" />
        </Link>
      </nav>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default Header