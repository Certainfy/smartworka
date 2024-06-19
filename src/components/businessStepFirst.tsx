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

const categories = [
  { id: 1, name: "Startup company", icon: "/apartment.svg" },
  { id: 2, name: "Corporate company", icon: "/skyscrapers.svg" },
];
export default function BusinessStepFirst() {
  const [selectedCategory, setSelectedCategory] = React.useState<number | null>(
    null
  );

  const handleSelect = (id: number) => {
    setSelectedCategory(id);
  };
  return (
    <div className="py-4">
      <article className="pb-6">
        <h1 className="text-3xl">Business profile</h1>
        <p className="text-sm text-gray-400">
          We need you to enter your correct detail of the neccessary
        </p>
      </article>

      <section className="space-y-6">
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Business name*</Label>
          <FormInput className="w-full" placeholder="Ex: Brandy" id="message" />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Business email address*</Label>
          <FormInput placeholder="Ex: mail@domain.com" id="message" />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Business description*</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
        <div>
          <Label htmlFor="message">Business industry*</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select your business industry" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="message">Staff number*</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select your staff number" />
            </SelectTrigger>
            <SelectContent className=" bg-white">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="message">Business categories*</Label>
          <div className="flex space-x-4">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleSelect(category.id)}
                className={`w-full h-32 border rounded-lg cursor-pointer transition ${
                  selectedCategory === category.id
                    ? "border-blue-500 border-2 bg-blue-50"
                    : "border-gray-200"
                } hover:border-blue-500 border-2 hover:bg-blue-50`}
              >
                <article className="px-4 py-4 space-y-8">
                  <section className="flex justify-between">
                    <div className=" bg-gray-200 p-4 rounded-full  w-12 h-12">
                        <img src={category.icon} alt="icons" />
                    </div>
                    <div>
                      <input
                        type="radio"
                        checked={selectedCategory === category.id}
                        onChange={() => handleSelect(category.id)}
                        className="form-radio w-4 h-4 text-blue-500"
                      />
                    </div>
                  </section>
                  <div className="text-sm font-medium text-gray-500">
                    {category.name}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
        {selectedCategory === 2 && (
          <section className="space-y-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Business email address</Label>
              <FormInput placeholder="Ex: mail@domain.com" id="message" />
            </div>
            <div>
              <Label htmlFor="message">Business type</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Business registration number</Label>
              <FormInput placeholder="Ex: 73693639GH" id="message" />
            </div>
            
          </section>
        )}
      </section>
    </div>
  );
}
