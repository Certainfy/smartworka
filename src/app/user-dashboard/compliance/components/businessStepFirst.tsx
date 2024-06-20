import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormInput } from "@/components/ui/formInput";
import { CloudDownload } from "lucide-react";
import {
  industry,
  categories,
  employeeRanges,
  businessTypes,
} from "@/constant/dashData";

export default function BusinessStepFirst() {
  const [selectedCategory, setSelectedCategory] = React.useState<number | null>(
    null
  );

  const [file, setFile] = React.useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

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
        <div className="grid w-full gap-2">
          <Label htmlFor="message">Business name*</Label>
          <FormInput className="w-full" placeholder="Ex: Brandy" id="message" />
        </div>
        <div className="grid w-full gap-2">
          <Label htmlFor="message">Business email address*</Label>
          <FormInput placeholder="Ex: mail@domain.com" id="message" />
        </div>
        <div className="grid w-full gap-2">
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
              {industry.map((industryName, index) => (
                <SelectItem key={index} value={industryName}>
                  {industryName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="message">Staff number*</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select your staff number" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {employeeRanges.map((range, index) => (
                <SelectItem key={index} value={range}>
                  {range}
                </SelectItem>
              ))}
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
            <div className="grid w-full gap-2">
              <Label htmlFor="message">Business email address</Label>
              <FormInput placeholder="Ex: mail@domain.com" id="message" />
            </div>
            <div className="grid w-full gap-2">
              <Label htmlFor="message">Business type</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {businessTypes.map((type, index) => (
                    <SelectItem key={index} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full gap-2">
              <Label htmlFor="message">Business registration number</Label>
              <FormInput placeholder="Ex: 73693639GH" id="message" />
            </div>
            <section className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-20 h-20 border-2 border-solid border-blue-500 rounded-lg">
                <label className="flex flex-col items-center justify-center cursor-pointer">
                  <CloudDownload className="text-blue-600" />
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              <div>
                <p className="text-md">Upload your organisation logo</p>
                <p className="text-sm text-gray-400">
                  Square image, max size of 500kb
                </p>
              </div>
            </section>
          </section>
        )}
      </section>
    </div>
  );
}
