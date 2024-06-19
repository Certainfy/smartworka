"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Linelayout from "@/components/ui/line-layout";
import { Eye, EyeOff, Mail } from "lucide-react";
import Link from "next/link";
import React, { useState, FormEvent } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isToggle, setIsToggle] = useState<boolean>(false);

    const resetForm = () => {
      setEmail('');
      setPassword('');
      setIsToggle(false);
      // ... reset other form fields as needed
    };

    // state to hold validation errors
    const [errors, setErrors] = useState({ email: '', password: '' });

    const onToggle = () => {
      setIsToggle(!isToggle);
    };

    const validate = () => {
      let isValid = true;
      let errors = { email: '', password: '' };
    
      // Simple email regex for demonstration purposes
      const emailRegex = /\S+@\S+\.\S+/;
    
      if (!email) {
        isValid = false;
        errors.email = 'Email is required';
      } else if (!emailRegex.test(email)) {
        isValid = false;
        errors.email = 'Please enter a valid email address';
      }
    
      if (!password) {
        isValid = false;
        errors.password = 'Password is required';
      } else if (password.length < 8) {
        isValid = false;
        errors.password = 'Password must be at least 8 characters long';
      }
    
      setErrors(errors);
      return isValid;
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    
      // Validate inputs before proceeding with login logic
      if (validate()) {
        console.log('Email:', email);
        console.log('Password:', password);
        resetForm();
        // handle the login logic here,
        // such as sending a request to your authentication service.
      }
    };

    return (
      <Linelayout>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-6 pt-24">
          <div className="space-y-3 text-white text-center">
            <h1 className="text-3xl font-bold">Log In</h1>
            <p className="text-md text-gray-400">
              Enter your credentials to access your account
            </p>
          </div>
          <div>
            <Input
              label="EMAIL ADDRESS"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded bg-background"
              icons={<Mail className="h-5 w-5 text-muted-foreground text-gray-600" />}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
  
          <div>
            <Input
              label="PASSWORD"
              type={isToggle ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onClick={onToggle}
              className="w-full rounded bg-background"
              icons={isToggle ? <EyeOff className="h-5 w-5 text-muted-foreground text-gray-600 cursor-pointer" /> : <Eye className="h-5 w-5 text-muted-foreground text-gray-600 cursor-pointer"/>}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <div className="flex items-center gap-8">
            <div className="space-x-1">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                className="h-4 w-4"
              />
              <label htmlFor="rememberMe" className="text-sm font-medium leading-none text-white">
                Remember me for 30 days
              </label>
            </div>
            <Link href="/forgot-password" legacyBehavior>
              <a className="text-blue-600 text-sm">Forgot Password?</a>
            </Link>
          </div>
          <Button type="submit" className="md:w-[200px] lg:w-[336px] bg-blue-600 text-base text-white">
            Log into Account
          </Button>
          <div>
            <p className="space-x-1">
              <span className="text-white">Are you new here?</span>
              <Link href="/signup" legacyBehavior>
                <a className="text-blue-600">Create Account</a>
              </Link>
            </p>
          </div>
        </form>
      </Linelayout>
    );

//   return (
//     <Linelayout>
//       <div className="flex flex-col items-center justify-center gap-6 pt-24">
//         <div className="space-y-3 text-white text-center">
//           <h1 className=" text-3xl font-bold">Log In</h1>
//           <p className="text-md text-gray-400">
//             Enter your credentials to access your account
//           </p>
//         </div>
//         <div>
//           <Input
//             label="EMAIL ADDRESS"
//             type="email"
//             placeholder="Enter Email"
//             className="w-full rounded bg-background"
//             icons={<Mail className="h-5 w-5 text-muted-foreground text-gray-600" />}
//           />
//         </div>

//         <div>
//           <Input
//             label="PASSWORD"
//             type={isToggle ? "text" : "password"}
//             placeholder="Enter Password"
//             onClick={onToggle}
//             className="w-full rounded bg-background"
//             icons={isToggle ?  <EyeOff  className="h-5 w-5 text-muted-foreground text-gray-600 cursor-pointer" /> : <Eye className="h-5 w-5 text-muted-foreground text-gray-600 cursor-pointer"/>}
//           />
//         </div>
//         <div className="flex items-center gap-8">
//           <div className=" space-x-1">
//             <input
//               type="checkbox"
//               name="terms"
//               id="terms"
//               className=" h-3 w-3"
//             />
//             <label
//               htmlFor="terms"
//               className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             >
//               Remember me for 30 days
//             </label>
//           </div>
//           <Link href="#" className=" text-blue-600 text-sm">
//             Forgot Password?
//           </Link>
//         </div>
//         <Button className="md:w-[200px] lg:w-[336px] bg-blue-600 text-base text-white w-">
//           Log into Account
//         </Button>
//         <div>
//             <p className="space-x-1">
//             <span className="text-white">Are you new here?</span>
// <span className=" text-blue-600">Create Account</span></p>
//         </div>
//       </div>
//     </Linelayout>
//   );
}
