"use client";
import React, { useState } from "react";

const categories = [
  "Marketing",
  "Education",
  "Product management",
  "Finance",
  "Health",
  "Resources",
  "Nonprofits",
  "More...",
];

const BusinessStepThird: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <article className="py-6">
        <h2 className="text-3xl">Select what you'd like to manage first</h2>
        <p className=" text-gray-500 text-md">
          You can always add more in the future
        </p>
      </article>
      <div className="flex flex-wrap space-x-2 space-y-2">
        {categories.map((category, index) => (
          <label
            key={index}
            className={`flex items-center px-4 py-2 space-x-2 border rounded-full cursor-pointer transition ${
              selectedCategory === category
                ? "border-blue-500 border-2 bg-blue-50 text-blue-500"
                : "border-gray-300 text-gray-500"
            } hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50`}
          >
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={() => handleSelect(category)}
              className="form-radio w-4 h-4 text-blue-500"
            />
            <span>{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default BusinessStepThird;
