import { Card } from "@/components/ui/card";
import { DatePicker } from "./components/date-picker";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <main className="px-8">
      <section className="space-y-3">
        <article>
          <h1 className="text-lg text-blue-700">Hello, Edwin</h1>
          <p className="text-sm text-gray-400">
            You are currently using a business account
          </p>
        </article>
        <article className="flex justify-between items-center px-3">
          <div>
          <h1 className="text-2xl">Overview</h1>
          </div>
          <DatePicker/> 
        </article>
      </section>
      <section className="grid grid-cols-4 gap-4 py-6">
        <Card className="w-full h-[196px]">
          <section className="pt-4 space-y-3 px-3">
            <img src="/dash-icon-1.svg" alt="dash-icon" className=" size-12" />
            <p className="text-md text-gray-500">Total Budget</p>
            <h2 className="text-2xl">₦7,179,784.00</h2>
            <span className="text-[10px] flex items-center">
              <ArrowUpRight className=" text-green-500 text-[10px]" />
              12% increase from last month
            </span>
          </section>
        </Card>
        <Card className="w-full h-[196px]">
          <section className="pt-4 space-y-3 px-3">
            <img src="/dash-icon-2.svg" alt="dash-icon" className=" size-12" />
            <p className="text-md text-gray-500">Project</p>
            <h2><small className="text-2xl">95</small> <small className="text-lg">/100</small></h2>
            <span className="text-[10px] flex items-center">
            <ArrowDownRight  className=" text-red-500 text-[10px]" />
              10% decrease from last month
            </span>
          </section>
        </Card>
        <Card className="w-full h-[196px]">
        <section className="pt-4 space-y-3 px-3">
            <img src="/dash-icon-3.svg" alt="dash-icon" className=" size-12" />
            <p className="text-md text-gray-500">Transaction Count</p>
            <h2 className="text-2xl">1022</h2>
            <span className="text-[10px] flex items-center">
              <ArrowUpRight className=" text-green-500 text-[10px]" />
              8% increase from last month
            </span>
          </section>
        </Card>
        <Card className="w-full h-[196px]">
        <section className="pt-4 space-y-3 px-3">
            <img src="/dash-icon-4.svg" alt="dash-icon" className=" size-12" />
            <p className="text-md text-gray-500">Resources</p>
            <h2><small className="text-2xl">101</small> <small className="text-lg">/120</small></h2>
            <span className="text-[10px] flex items-center">
              <ArrowUpRight className=" text-green-500 text-[10px]" />
              2% increase from last month
            </span>
          </section>
        </Card>
      </section>
      <section>
        <Card>
          <h1>Hello</h1>
        </Card>
      </section>
    </main>
  );
}
