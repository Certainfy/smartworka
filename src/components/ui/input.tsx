"use client";
import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: (...args: any[]) => any;
  onClick?: (...args: any[]) => any;
  label?: any;
  rightIcons?: any;
  error?: any;
  leftIcons?: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      leftIcons,
      onChange,
      rightIcons,
      error,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleChange = (e: any) => {
      if (onChange) {
        // Pass the entire event object instead of just the value
        onChange(e);
        // onChange(e.target.value);
      }
      return null;
    };
    return (
      <>
        <label htmlFor="text" className="text-[14px] text-white">
          {label}
        </label>
        <div className="md:w-[200px] lg:w-[336px] rounded relative font-normal outline-none bg-none placeholder:text-black-700 text-sm">
          <div className="absolute top-[13px] left-[12px]" onClick={onClick}>
            {leftIcons}
          </div>
          <input
            type={type}
            onChange={handleChange}
            className={cn(
              "flex h-12 w-full rounded border border-input bg-background py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            ref={ref}
            {...props}
          />
          <div className="absolute top-[15px] right-[15px]" onClick={onClick}>
            {rightIcons}
          </div>
        </div>
        <span>{error}</span>
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
