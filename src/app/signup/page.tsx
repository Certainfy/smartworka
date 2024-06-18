"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Linelayout from "@/components/ui/line-layout";
import { Eye, EyeOff, Mail } from "lucide-react";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from 'next/link';

interface FormErrors {
  companyName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  terms?: string;
}

export default function SignUp() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    // State variables for input values
    const [companyName, setCompanyName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

    // Function to reset form fields
    const resetForm = () => {
      setCompanyName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setTermsAccepted(false);
      // ... reset other form fields as needed
    };

    // State variables for error messages
    const [errors, setErrors] = useState<FormErrors>({});
  
    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };
  
    const toggleConfirmPasswordVisibility = () => {
      setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };

    // Validation functions
    const validateForm = (): boolean => {
      let isValid: boolean = true;
      let errors: FormErrors = {};

      // Company Name validation
      if (!companyName.trim()) {
        isValid = false;
        errors.companyName = "Company name is required.";
      }

      // Email validation
      if (!email.trim()) {
        isValid = false;
        errors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        isValid = false;
        errors.email = "Email is invalid.";
      }

      // Password validation
      if (!password) {
        isValid = false;
        errors.password = "Password is required.";
      } else if (password.length < 8) {
        isValid = false;
        errors.password = "Password must be at least 8 characters long.";
      }

      // Confirm Password validation
      if (!confirmPassword) {
        isValid = false;
        errors.confirmPassword = "Confirm password is required.";
      } else if (password !== confirmPassword) {
        isValid = false;
        errors.confirmPassword = "Passwords do not match.";
      }

      // Terms and Conditions validation
      if (!termsAccepted) {
        isValid = false;
        errors.terms = "You must accept the terms and conditions.";
      }

      setErrors(errors);
      return isValid;
    };


      // Handle form submission
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      if (validateForm()) {
        // Log form data to the console
        console.log('Company Name:', companyName);
        console.log('Email:', email);
        console.log('Password:', password);

        // Proceed with form submission (e.g., API call)
        resetForm();
      }
    };

    return (
      <Linelayout>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-6 pt-24">
          <div className="space-y-3 text-white text-center">
            <h1 className="text-3xl font-bold">Create Account</h1>
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
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full rounded bg-background"
              />
              {errors.companyName && (
                <p className="text-red-500">{errors.companyName}</p>
              )}
            </div>
            <div>
              <Input
                label="EMAIL ADDRESS"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded bg-background"
                icons={
                  <Mail className="h-5 w-5 text-muted-foreground text-gray-600" />
                }
              />
              {errors.email && (
                <p className="text-red-500">{errors.email}</p>
              )}
            </div>
          </div>
    
          <div className="flex space-x-8">
            <div>
              <Input
                label="PASSWORD"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>
            <div>
              <Input
                label="CONFIRM PASSWORD"
                type={isConfirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="space-x-1">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="h-3 w-3"
              />
              <label
                htmlFor="terms"
                className="text-md font-medium leading-none space-x-1"
              >
                <span className="text-white">I accept the </span>
                <span className="text-blue-600">
                  Terms of Service & Privacy Policy
                </span>.
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-500">{errors.terms}</p>
            )}
            <Button type="submit" className="md:w-[200px] lg:w-[336px] bg-blue-600 text-base text-white w-full">
              Create Account
            </Button>
          </div>
          <div>
            <p className="space-x-1">
              <span className="text-white">Already a member?</span>
              <Link href="/login" legacyBehavior>
                <a className="text-blue-600 cursor-pointer">Login</a>
              </Link>
            </p>
          </div>
        </form>
      </Linelayout>
    );

    

  // return (
  //   <Linelayout>
  //     <div className="flex flex-col items-center justify-center gap-6 pt-24">
  //       <div className="space-y-3 text-white text-center">
  //         <h1 className=" text-3xl font-bold">Create Account</h1>
  //         <p className="text-md text-gray-400">
  //           Take your facility through a whole new experience.
  //         </p>
  //       </div>
  //       <div className="flex space-x-8">
  //         <div>
  //           <Input
  //             label="COMPANY NAME"
  //             type="text"
  //             placeholder="Smart Pip"
  //             className="w-full rounded bg-background"
  //           />
  //         </div>
  //         <div>
  //           <Input
  //             label="EMAIL ADDRESS"
  //             type="email"
  //             placeholder="Enter Email"
  //             className="w-full rounded bg-background"
  //             icons={
  //               <Mail className="h-5 w-5 text-muted-foreground text-gray-600" />
  //             }
  //           />
  //         </div>
  //       </div>

  //       <div className="flex space-x-8">
  //         <div>
  //           <Input
  //             label="PASSWORD"
  //             type={isPasswordVisible ? "text" : "password"}
  //             placeholder="Enter Password"
  //             onClick={togglePasswordVisibility}
  //             className="w-full rounded bg-background"
  //             icons={
  //               isPasswordVisible ? (
  //                 <EyeOff className="h-5 w-5 text-muted-foreground text-gray-600 cursor-pointer" />
  //               ) : (
  //                 <Eye className="h-5 w-5 text-muted-foreground text-gray-600 cursor-pointer" />
  //               )
  //             }
  //           />
  //         </div>
  //         <div>
  //           <Input
  //             label="CONFIRM PASSWORD"
  //             type={isConfirmPasswordVisible ? "text" : "password"}
  //             placeholder="Enter Confirm Password"
  //             onClick={toggleConfirmPasswordVisibility}
  //             className="w-full rounded bg-background"
  //             icons={
  //               isConfirmPasswordVisible ? (
  //                 <EyeOff className="h-5 w-5 text-muted-foreground text-gray-600 cursor-pointer" />
  //               ) : (
  //                 <Eye className="h-5 w-5 text-muted-foreground text-gray-600 cursor-pointer" />
  //               )
  //             }
  //           />
  //         </div>
  //       </div>
  //       <div className="flex items-center gap-8">
  //         <div className=" space-x-1">
  //           <input
  //             type="checkbox"
  //             name="terms"
  //             id="terms"
  //             className=" h-3 w-3"
  //           />
  //           <label
  //             htmlFor="terms"
  //             className="text-md font-medium leading-none space-x-1"
  //           >
  //             <span className="text-white">I accept the </span>
  //             <span className="text-blue-600">
  //               Terms of Service & Privacy Policy
  //             </span>
  //             .
  //           </label>
  //         </div>
  //         <Button type="submit" className="md:w-[200px] lg:w-[336px] bg-blue-600 text-base text-white w-">
  //           Create Account
  //         </Button>
  //       </div>
  //       <div>
  //         <p className="space-x-1">
  //           <span className="text-white">Already a member?</span>
  //           <span className=" text-blue-600">Login</span>
  //         </p>
  //       </div>
  //     </div>
  //   </Linelayout>
  // );
}
