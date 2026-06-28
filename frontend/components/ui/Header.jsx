"use client";

import {
  SignInButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { RefrigeratorIcon, Cookie, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import UserDropdown from "./UserDropdown";
import PricingModal from "./PricingModal";


export default function Header() {
  const { isSignedIn, user } = useUser();
  

  return (
    <header className="fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href={isSignedIn ? "/dashboard" : "/"}>
          <Image
            src="/ChatGPT Image Jun 19, 2026, 08_46_22 AM - Edited.png"
            alt="Cravio Logo"
            width={60}
            height={60}
            className="w-16 h-auto"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/recipes"
            className="hover:text-orange-600 transition-colors flex items-center gap-1.5"
          >
            <Cookie className="w-4 h-4" />
            My Recipes
          </Link>

          <Link
            href="/pantry"
            className="hover:text-orange-600 transition-colors flex items-center gap-1.5"
          >
            <RefrigeratorIcon className="w-4 h-4" />
            My Pantry
          </Link>
        </div>

        {/* Auth Section */}
        <div className="flex items-center space-x-4">

  <PricingModal subscriptionTier="free">
  <Badge
    variant="outline"
    className="flex h-8 px-3 gap-1.5 rounded-full text-xs font-semibold cursor-pointer"
  >
    <Sparkles className="h-3 w-3 text-orange-500" />
    <span>Free Plan</span>
  </Badge>
</PricingModal>

  {!isSignedIn ? (
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
  ) : (
    <UserDropdown />
  )}
</div>

      </nav>
    </header>
  );
}