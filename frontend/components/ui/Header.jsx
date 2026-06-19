"use client";

import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md z-50 supports-backdrop-filter:bg-stone-50/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        Logo

        <div>Nav Links</div>


        <div className="flex items-center space-x-4">
           {!isSignedIn && (
  <>
    <SignInButton mode="modal">
      <button className="px-4 py-2 border rounded-full">
        Sign In
      </button>
    </SignInButton>

    <SignUpButton mode="modal">
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition">
        Sign Up
      </button>
    </SignUpButton>
  </>
)}

{isSignedIn && <UserButton />}


        </div>

      </nav>
    </header>
  );
}