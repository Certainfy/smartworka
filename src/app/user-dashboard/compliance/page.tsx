'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Stepper from "@/components/stepper";
import React, { useState } from "react";



export default function Page() {
  const [currentView, setCurrentView] = useState('Home')

  function handleFirstView () {
     setCurrentView('businessProfile')
  }

  function handleSecondView () {
    setCurrentView('businessAddress')
 }

 function handleThirdView () {
  setCurrentView('businessPlan')
}

const businessData = [
  {
    id: 1,
    title: "BUSINESS PROFILE",
    subTitle: "You need to fill detail of your business",
    icon: "/briefcase.svg",
    btn: handleFirstView
  },
  {
    id: 2,
    title: "BUSINESS ADDRESS",
    subTitle: "You need to fill detail address of your business",
    icon: "/map-location 04.svg",
    btn: handleSecondView
  },
  {
    id: 3,
    title: "BUSINESS PLAN",
    subTitle: "You need to fill the plans for your business",
    icon: "/wallet-arrow-down.svg",
    btn: handleThirdView
  },
];

  return (
    <>
    {currentView === 'Home' && 
     <div className="px-14">
     <article className="py-8">
       <h2 className="text-3xl">Hello, Edwin</h2>
       <p className="text-sm text-gray-400">
         You are yet to complete your KYC verification to start using wallet
       </p>
     </article>
     <Card className="">
       <CardHeader>
         <CardTitle>Complete this process to verify account</CardTitle>
       </CardHeader>
       <CardContent className=" space-y-4">
         {businessData.map((data) => (
           <section className="h-24 w-full bg-gray-100 rounded-md" key={data.id}>
             <article className="flex items-center justify-between py-6 px-4">
               <section className="flex items-center gap-2">
                 <div className="w-12 h-12 p-2 bg-white rounded-full">
                   <img src={data.icon} alt='icons'/>
                 </div>
                 <section>
                   <p>{data.title}</p>
                   <p className="text-sm text-gray-400">
                     {data.subTitle}
                   </p>
                 </section>
               </section>
               <section>
                 <Button className=" bg-blue-600 text-white" onClick={data.btn}>Setup</Button>
               </section>
             </article>
           </section>
         ))}
       </CardContent>
     </Card>
   </div>}
   {currentView === 'businessProfile' &&
    <Stepper/>
   }
    </>
   
  );
}
