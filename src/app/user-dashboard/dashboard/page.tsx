import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <main className="px-8">
      <section className="space-y-3">
        <article>
          <h1 className="text-3xl text-blue-700">Hello, Edwin</h1>
          <p className="text-md text-gray-400">
            You are currently using a business account
          </p>
        </article>
        <article>
          <h1 className="text-3xl">Overview</h1>
        </article>
      </section>
      <section className="grid grid-cols-4 gap-4 py-6">
        <Card className="w-full h-[196px]">
          <section className="pt-4 space-y-3 px-3">
            <img src="/dash-icon-1.svg" alt="dash-icon" className=" size-12" />
            <p className="text-md text-gray-500">Total Budget</p>
            <h2 className="text-3xl">₦7,179,784.00</h2>
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
            <h2><small className="text-3xl">95</small> <small className="text-lg">/100</small></h2>
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
            <h2 className="text-3xl">1022</h2>
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
            <h2><small className="text-3xl">101</small> <small className="text-lg">/120</small></h2>
            <span className="text-[10px] flex items-center">
              <ArrowUpRight className=" text-green-500 text-[10px]" />
              2% increase from last month
            </span>
          </section>
        </Card>
      </section>
    </main>
  );
}
