import React from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";


const labelImg = [
  {
    id:1,
    image: '/img-1.png'
  },
  {
    id:2,
    image: '/img-2.png'
  },
  {
    id:3,
    image: '/img-3.png'
  },
  {
    id:4,
    image: '/img-4.png'
  },
  {
    id:5,
    image: '/img-5.png'
  },
  {
    id:6,
    image: '/img-6.png'
  },
]

export default function Home() {
  return (
    <section>
      <header className="h-full bg-[#051537] flex flex-col gap-8 items-center py-12 bg-[url('/bg-line.svg')] w-full bg-cover bg-top">
        <Button className="h-6 rounded-full text-sm bg-blue-600 hover:bg-blue-700">
          <strong className="mr-2">NEW</strong> Learn how AI can help alleviate
          the CPA talent crisis <MoveRight className="ml-2 h-4 w-4" />{" "}
        </Button>
        <h1 className="text-8xl text-white text-center text-wrap font-bold">
          The enterprise work<br/> 
          management platform
        </h1>
        <p className="text-md text-white">The foundation for managing projects, programs, and processes that scale.</p>
        <div className=" space-x-4">
        <Button className="h-[45px] text-base w-[170px] rounded-full bg-blue-600 hover:bg-blue-800 text-white py-4">
            Get Started <MoveRight className="ml-2 h-4 w-4" />
          </Button>
          <Button className="h-[45px] text-base w-[170px] rounded-full bg-white text-blue-600 hover:bg-white py-4">
            Watch Demo <MoveRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <p className="text-md text-white">No credit card needed ✦ Unlimited time on Free plan</p>
        <figure className="py-8">
        <img src="/dasboard-frame.png" alt="" />
        </figure>
        <p className="text-md text-white">Top 500 firms trust Smartworka to improve efficiency, revenue, and client experiences.</p>
        <figure></figure>
      </header>
    </section>
  );
}
