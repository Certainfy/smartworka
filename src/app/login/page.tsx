"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Linelayout from "@/components/ui/line-layout";
import { Eye, EyeOff, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function LoginPage() {

    const [isToggle, setIsToggle] = React.useState(false);

    const onToggle = () => {
      setIsToggle(!isToggle);
    };

  return (
    <Linelayout>
      <div className="flex flex-col items-center justify-center gap-6 pt-24">
        <div className="space-y-3 text-white text-center">
          <h1 className=" text-3xl font-bold">Log In</h1>
          <p className="text-md text-gray-400">
            Enter your credentials to access your account
          </p>
        </div>
        <div>
          <Input
            label="EMAIL ADDRESS"
            type="email"
            placeholder="Enter Email"
            className="w-full rounded bg-background"
            icons={<Mail className="h-5 w-5 text-muted-foreground text-gray-600" />}
          />
        </div>

        <div>
          <Input
            label="PASSWORD"
            type={isToggle ? "text" : "password"}
            placeholder="Enter Password"
            onClick={onToggle}
            className="w-full rounded bg-background"
            icons={isToggle ?  <EyeOff  className="h-5 w-5 text-muted-foreground text-gray-600 cursor-pointer" /> : <Eye className="h-5 w-5 text-muted-foreground text-gray-600 cursor-pointer"/>}
          />
        </div>
        <div className="flex items-center gap-8">
          <div className=" space-x-1">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className=" h-3 w-3"
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me for 30 days
            </label>
          </div>
          <Link href="#" className=" text-blue-600 text-sm">
            Forgot Password?
          </Link>
        </div>
        <Button className="md:w-[200px] lg:w-[336px] bg-blue-600 text-base text-white w-">
          Log into Account
        </Button>
        <div>
            <p className="space-x-1">
            <span className="text-white">Are you new here?</span>
<span className=" text-blue-600">Create Account</span></p>
        </div>
      </div>
    </Linelayout>
  );
}
