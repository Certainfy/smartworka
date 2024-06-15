import React from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const labelImg = [
  {
    id: 1,
    image: "/img-1.png",
  },
  {
    id: 2,
    image: "/img-2.png",
  },
  {
    id: 3,
    image: "/img-3.png",
  },
  {
    id: 4,
    image: "/img-4.png",
  },
  {
    id: 5,
    image: "/img-5.png",
  },
  {
    id: 6,
    image: "/img-7.png",
  },
  {
    id: 7,
    image: "/img-8.png",
  },
  {
    id: 8,
    image: "/img-9.png",
  },
];

export default function Home() {
  return (
    <>
      <header className="h-full bg-[#051537] flex flex-col gap-10 items-center py-12 bg-[url('/bg-line.svg')] w-full bg-cover bg-top">
        <Button className="h-6 rounded-full text-sm bg-blue-600 hover:bg-blue-700">
          <strong className="mr-2">NEW</strong> Learn how AI can help alleviate
          the CPA talent crisis <MoveRight className="ml-2 h-4 w-4" />{" "}
        </Button>
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-white text-center font-bold">
          The enterprise work
          <br className="hidden md:block" />
          management platform
        </h1>
        <p className="text-sm md:text-md text-white text-center px-4 md:px-0">
          The foundation for managing projects, programs, and processes that
          scale.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Button className="h-[45px] text-base w-[170px] rounded-full bg-blue-600 hover:bg-blue-800 text-white py-4">
            Get Started <MoveRight className="ml-2 h-4 w-4" />
          </Button>
          <Button className="h-[45px] text-base w-[170px] rounded-full bg-white text-blue-600 hover:bg-white py-4">
            Watch Demo <MoveRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <p className="text-sm md:text-md text-white text-center">
          No credit card needed ✦ Unlimited time on Free plan
        </p>
        <figure className="py-8">
          <img src="/dasboard-frame.png" alt="" className="w-full md:w-auto" />
        </figure>
        <p className="text-sm md:text-md text-white text-center">
          Top 500 firms trust Smartworka to improve efficiency, revenue, and
          client experiences.
        </p>
        <figure className="flex flex-wrap items-center justify-center gap-4 md:gap-12">
          {labelImg.map((data: any) => (
            <img
              src={data.image}
              alt="logos"
              key={data.id}
              className="w-24 md:w-auto"
            />
          ))}
        </figure>
      </header>
      <main className="mt-12">
        <section className="flex flex-col md:flex-row items-center gap-12 justify-center px-4 md:px-12">
          <figure className="w-full md:w-auto">
            <img
              src="/preview -1.png"
              className="w-full md:w-[1500px] object-cover"
              alt="preview"
            />
          </figure>
          <article className="space-y-2 text-center md:text-left">
            <p className="text-yellow-400">Business Tools</p>
            <h1 className="text-2xl font-bold">Useful Features</h1>
            <h3 className="text-xl text-blue-500">Team Management</h3>
            <p className="w-full text-base md:w-3/5 mx-auto md:mx-0">
              The point of using smartworka is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <ul className="list-none p-0">
              <li className="flex items-center justify-center md:justify-start mb-2">
                <img src="/tick-circle.png" alt="Tick" className="mr-2" />
                <span>99% Survey Report</span>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-2">
                <img src="/tick-circle.png" alt="Tick" className="mr-2" />
                <span>Trusted By Teams</span>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-2">
                <img src="/tick-circle.png" alt="Tick" className="mr-2" />
                <span>Self-Services</span>
              </li>
            </ul>
          </article>
        </section>
        <section className="flex items-center justify-around mt-12">
          <article className="text-center">
            <p className=" text-blue-600 text-4xl">200</p>
            <p>Countries Worldwide</p>
          </article>
          <article className="text-center">
            <p className=" text-blue-600 text-4xl">156k</p>
            <p>Registered Users</p>
          </article>
          <article className="text-center">
            <p className=" text-blue-600 text-4xl">23k</p>
            <p>Small & Big Companies</p>
          </article>
        </section>
        <section className="h-full bg-[#051537] flex flex-col items-center pt-12 bg-[url('/bg-line.svg')] w-full bg-cover bg-top px-12">
          <article className="text-white text-center space-y-4">
            <h1 className="text-6xl font-medium">
              Built by and for practitioners
            </h1>
            <p>Smartworka is built to power the firm of the future.</p>
          </article>
          <section className="flex flex-row gap-10 items-center">
            <section>
              <article className="text-white space-y-2">
                <p>PRODUCTS</p>
                <h1 className="w-full text-4xl font-medium md:w-3/5 mx-auto md:mx-0">
                  Grow your business with the Smartworka Platform for project
                  management
                </h1>
                <p className="w-full text-base md:w-1/2 md:mx-0">
                  Smartworka increases margins, revenue, and client satisfaction
                  across all advisory and audit engagements.
                </p>
              </article>
              <section className="pt-8 text-white">
                <article className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold">Smartworka</h3>
                    <p>Award-winning platform built for advisory & audit</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Document Management</h3>
                    <p>Enterprise-grade workpaper management</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Engagement Hub</h3>
                    <p>End-to-end engagement management</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Request Management</h3>
                    <p>Automated modern request management</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Reporting Automation</h3>
                    <p>One-click collaborative report generation</p>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <h3 className="font-bold">Client Hub</h3>
                      <p>Modern experience that clients will love</p>
                    </div>
                  </div>
                </article>
              </section>
            </section>
            <section>
              <img src="/section-7.png" alt="section" />
            </section>
          </section>
        </section>
      </main>
    </>
  );
}
