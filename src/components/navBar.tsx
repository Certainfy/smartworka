"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { MoveRight, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [isToggle, setIsToggle] = React.useState(false);
  const router = useRouter();
  function handleLogin() {
    router.push("/login");
  }

  function handleSignUp() {
    router.push("/signup");
  }

  const onToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div>
      <nav className="flex flex-row justify-between items-center py-6 px-6">
        <div className="flex gap-12 items-center">
          <img src="/Smartworka.svg" alt="logo" />
          <ul className="flex flex-row space-x-4 text-gray-400 text-base hidden lg:flex">
            <li className="text-gray-400 hover:text-blue-600">
              <Link href="#about" legacyBehavior>
                <a>About</a>
              </Link>
            </li>
            <li className="text-gray-400 hover:text-blue-600">
              <Link href="#features" legacyBehavior>
                <a>Features</a>
              </Link>
            </li>
            <li className="text-gray-400 hover:text-blue-600">
              <Link href="#works" legacyBehavior>
                <a>How it Works</a>
              </Link>
            </li>
            <li className="text-gray-400 hover:text-blue-600">
              <Link href="#contact" legacyBehavior>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-x-3 hidden lg:block">
          <Button className="border-0" variant="outline" onClick={handleLogin}>
            Login
          </Button>
          <Button
            className="text-white rounded-full bg-blue-600 hover:bg-blue-800"
            onClick={handleSignUp}
          >
            Get Started <MoveRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <Button
          onClick={onToggle}
          className="lg:hidden"
          aria-label="Toggle navigation menu"
        >
          <Menu className="text-2xl" />
        </Button>
      </nav>

      <nav
        className={`bg-[#051537] h-full absolute w-full z-40 rounded-md lg:hidden px-2 py-4 bottom-4 ${
          isToggle ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-row justify-between">
          <img src="/Smartworka.svg" alt="logo" />
          <Button
            className="p-4"
            onClick={onToggle}
            aria-label="Close navigation menu"
          >
            <X className="text-2xl text-white" />
          </Button>
        </div>

        <ul className="space-x-4 flex lg:hidden flex-col gap-8 items-center text-white text-lg py-12">
          <li className="text-gray-400 hover:text-blue-600">
            <Link href="#about" legacyBehavior>
              <a>About</a>
            </Link>
          </li>
          <li className="text-gray-400 hover:text-blue-600">
            <Link href="#features" legacyBehavior>
              <a>Features</a>
            </Link>
          </li>
          <li className="text-gray-400 hover:text-blue-600">
            <Link href="#works" legacyBehavior>
              <a>How it Works</a>
            </Link>
          </li>
          <li className="text-gray-400 hover:text-blue-600">
            <Link href="#contact" legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
        </ul>

        <div className="space-y-4 flex flex-col w-full lg:hidden">
          <Button
            className="rounded-full bg-white hover:bg-white text-blue-800"
            variant="outline"
          >
            Login
          </Button>
          <Button className="text-white rounded-full bg-blue-600 hover:bg-blue-800">
            Get Started <MoveRight className="ml-2 h-4 w-4 font-bold" />
          </Button>
        </div>
      </nav>
    </div>
  );
}
