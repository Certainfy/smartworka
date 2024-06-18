"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Linelayout from "@/components/ui/line-layout";
import { Eye, EyeOff, Mail } from "lucide-react";
import React, { useState } from "react";

export default function SignUp() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  
    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };
  
    const toggleConfirmPasswordVisibility = () => {
      setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };
  return (
    <Linelayout>
      <div className="flex flex-col items-center justify-center gap-6 pt-24">
        <div className="space-y-3 text-white text-center">
          <h1 className=" text-3xl font-bold">Create Account</h1>
          <p className="text-md text-gray-400">
            Take your facility through a whole new experience.
          </p>
        </div>
        <div className="flex space-x-8">
          <div>
            <Input
              label="COMPANY NAME"
              type="text"
              placeholder="Smart Pip"
              className="w-full rounded bg-background"
            />
          </div>
          <div>
            <Input
              label="EMAIL ADDRESS"
              type="email"
              placeholder="Enter Email"
              className="w-full rounded bg-background"
              icons={
                <Mail className="h-5 w-5 text-muted-foreground text-gray-600" />
              }
            />
          </div>
        </div>

        <div className="flex space-x-8">
          <div>
            <Input
              label="PASSWORD"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Enter Password"
              onClick={togglePasswordVisibility}
              className="w-full rounded bg-background"
              icons={
                isPasswordVisible ? (
                  <EyeOff className="h-5 w-5 text-muted-foreground text-gray-600 cursor-pointer" />
                ) : (
                  <Eye className="h-5 w-5 text-muted-foreground text-gray-600 cursor-pointer" />
                )
              }
            />
          </div>
          <div>
            <Input
              label="CONFIRM PASSWORD"
              type={isConfirmPasswordVisible ? "text" : "password"}
              placeholder="Enter Confirm Password"
              onClick={toggleConfirmPasswordVisibility}
              className="w-full rounded bg-background"
              icons={
                isConfirmPasswordVisible ? (
                  <EyeOff className="h-5 w-5 text-muted-foreground text-gray-600 cursor-pointer" />
                ) : (
                  <Eye className="h-5 w-5 text-muted-foreground text-gray-600 cursor-pointer" />
                )
              }
            />
          </div>
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
              className="text-md font-medium leading-none space-x-1"
            >
              <span className="text-white">I accept the </span>
              <span className="text-blue-600">
                Terms of Service & Privacy Policy
              </span>
              .
            </label>
          </div>
          <Button className="md:w-[200px] lg:w-[336px] bg-blue-600 text-base text-white w-">
            Create Account
          </Button>
        </div>
        <div>
          <p className="space-x-1">
            <span className="text-white">Already a member?</span>
            <span className=" text-blue-600">Login</span>
          </p>
        </div>
      </div>
    </Linelayout>
  );
}
