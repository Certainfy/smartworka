import React from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormInput } from "./ui/formInput";

export default function BusinessStepSecond() {
  return (
    <div className="py-4">
      <article className="pb-6">
        <h1 className="text-3xl">Business address</h1>
        <p className="text-sm text-gray-400">
          We need you to enter your correct detail of the neccessary
        </p>
      </article>

      <section className="space-y-6">
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Company address*</Label>
          <FormInput className="w-full" placeholder="Ex: Lagos" id="message" />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Country*</Label>
          <Select>
            <SelectTrigger className="w-full text-gray-500">
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="message">State*</Label>
          <Select>
            <SelectTrigger className="w-full text-gray-500">
              <SelectValue placeholder="Select your state" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <section className="flex items-center gap-4">
        <div className="grid w-full gap-1.5">
            <Label htmlFor="message">LGA*</Label>
            <Select>
              <SelectTrigger className="w-full text-gray-500">
                <SelectValue placeholder="Select your local government area" />
              </SelectTrigger>
              <SelectContent className=" bg-white">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Postal Code*</Label>
            <FormInput className="w-full" placeholder="Ex: 10001" id="message" />
          </div>
        </section>
      </section>
    </div>
  );
}
