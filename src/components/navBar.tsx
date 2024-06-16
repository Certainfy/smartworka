import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function NavBar() {
  return (
    <div>
      <nav className="flex flex-row justify-between items-center py-6 px-6">
        <div className="flex gap-12 items-center">
          <img src="/Smartworka.svg" alt="logo" />
          <ul className="space-x-4 text-gray-400 text-base">
            <Link href="#about" className="text-gray-400 hover:text-blue-600">
              About
            </Link>
            <Link
              href="#features"
              className="text-gray-400 hover:text-blue-600"
            >
              Features
            </Link>
            <Link href="#works" className="text-gray-400 hover:text-blue-600">
             How it Works
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-blue-600">
              Contact
            </Link>
          </ul>
        </div>
        <div className="space-x-3">
          <Button className="border-0" variant="outline">
            Login
          </Button>
          <Button className="text-white rounded-full bg-blue-600 hover:bg-blue-800">
            Get Started <MoveRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>
    </div>
  );
}
