"use client";
import { ChevronRight, MoveLeft } from "lucide-react";
import React, { useState } from "react";
import BusinessStepFirst from "./businessStepFirst";
import BusinessStepSecond from "./businessStepSecond";
import BusinessStepThird from "./businessStepThird";
import { Button } from "./ui/button";

interface Step {
  label: string;
}

const steps: Step[] = [
  { label: "BUSINESS PROFILE" },
  { label: "BUSINESS ADDRESS" },
  { label: "BUSINESS PLAN" },
];

const Stepper: React.FC = ({ children }: any) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full h-[90vh] overflow-auto px-32  py-10">
      <div className="flex items-center justify-between border-b-2 pb-6 w-full mb-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`flex items-center text-sm justify-center w-6 h-6 rounded-full ${
                currentStep === index
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {index + 1}
            </div>
            <span
              className={`ml-2 ${
                currentStep === index ? "text-black" : "text-gray-500"
              }`}
            >
              {step.label}
            </span>
            {index < steps.length - 1 && (
              <span className="mx-2 text-gray-300">
                <ChevronRight />
              </span>
            )}
          </div>
        ))}
      </div>
      {currentStep === 0 && <BusinessStepFirst />}
      {currentStep === 1 && <BusinessStepSecond />}
      {currentStep === 2 && <BusinessStepThird />}
      <div className="flex justify-between w-full mt-4">
        <button
          className="flex items-center text-blue-700 gap-2 disabled:opacity-50"
          onClick={handlePrevious}
          disabled={currentStep === 0}
        >
          <MoveLeft /> Previous page
        </button>
        {currentStep === steps.length - 1 ? (
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            // onClick={handleNext}
          >
            Submit
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            onClick={handleNext}
          >
            Contiune
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
