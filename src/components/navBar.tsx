import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function NavBar() {
  return (
    <div>
      <nav className="flex flex-row justify-between items-center py-6 px-6">
        <div className="flex gap-12 items-center">
        <img src="/Smartworka.svg" alt="" />
        <ul className="space-x-4 text-gray-400 text-base">
          <Link href="">About</Link>
          <Link href="">Features</Link>
          <Link href="">How it works</Link>
          <Link href="">Contact</Link>
        </ul>
        </div>
        <div className="space-x-3">
          <Button className="border-0" variant="outline">Login</Button>
          <Button className=" rounded-full bg-blue-600 hover:bg-blue-800">
            Get Started <MoveRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>
    </div>
  );
}
