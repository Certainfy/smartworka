"use client";
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
	FaFacebookF,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa";
import { MoveRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { tabs } from "@/constant/tabsData";
import { labelImg } from "@/constant/imageData";
import Linelayout from "@/components/ui/line-layout";
import { ReactLenis } from "@studio-freight/react-lenis";
import NavBar from "@/components/navBar";
import { useRouter } from "next/navigation";

export default function Home() {
	const [activeTab, setActiveTab] = useState(0);
	const router = useRouter();

	function handleSignUp() {
		router.push("/signup");
	}
	return (
		<>
		<ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.5,
          smoothWheel: true,
        }}
      >
			<NavBar />
			<Linelayout>
				<header
					id="about"
					className="relative z-10 flex flex-col gap-10 items-center py-24"
				>
					<div className="px-4 lg:px-0">
						<Button className="h-full flex-col max-w-full lg:flex-row text-wrap rounded-full text-white text-sm bg-blue-600 hover:bg-blue-700">
							<strong className="mr-0 lg:mr-2">NEW</strong> Learn how AI can
							help alleviate the CPA talent crisis{" "}
							<MoveRight className="ml-2 h-4 w-4" />{" "}
						</Button>
					</div>
					<h1 className="text-2xl md:text-6xl lg:text-8xl text-white text-center font-bold">
						The enterprise work
						<br className="hidden md:block" />
						management platform
					</h1>
					<p className="text-sm md:text-lg text-white text-center px-4 md:px-0">
						The foundation for managing projects, programs, and processes that
						scale.
					</p>
					<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
						<Button
							className="h-[45px] text-base w-[170px] rounded-full bg-blue-600 hover:bg-blue-800 text-white py-4"
							onClick={handleSignUp}
						>
							Get Started <MoveRight className="ml-2 h-4 w-4" />
						</Button>
						<Button className="h-[45px] text-base w-[170px] rounded-full bg-white text-blue-600 hover:bg-white py-4">
							Watch Demo <MoveRight className="ml-2 h-4 w-4" />
						</Button>
					</div>
					<p className="text-sm md:text-lg text-white text-center">
						No credit card needed ✦ Unlimited time on Free plan
					</p>
					<figure className="py-8">
						<img
							src="/dasboard-frame.png"
							alt=""
							className="w-full md:w-auto"
						/>
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
								className="w-14 md:w-auto"
							/>
						))}
					</figure>
				</header>
			</Linelayout>
			<main className="mt-12">
				<section
					id="features"
					className="flex flex-col md:flex-row items-center gap-12 justify-center px-4 md:px-12"
				>
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
				<section className="flex flex-col lg:flex-row gap-8 items-center justify-around py-24">
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
				<section
					id="works"
					className="h-full bg-[#051537] flex flex-col items-center mt-12 py-24 bg-[url('/bg-line.svg')] w-full bg-cover bg-top px-12"
				>
					<article className="text-white text-center space-y-4">
						<h1 className="text-3xl lg:text-6xl font-medium">How It Works</h1>
						<p className="text-sm lg:text-md">
							Smartworka is built to power the firm of the future.
						</p>
					</article>
					<section className="flex flex-col lg:flex-row gap-10 items-center pt-12">
						<section>
							<article className="text-white space-y-2">
								<p className="text-md lg:text-base">PRODUCTS</p>
								<h1 className="w-full text-3xl lg:text-4xl font-medium md:w-[525px] mx-auto md:mx-0">
									Grow your business with the Smartworka Platform for project
									management
								</h1>
								<p className="w-full text-base md:w-[500px] md:mx-0">
									Smartworka increases margins, revenue, and client satisfaction
									across all advisory and audit engagements.
								</p>
							</article>
							<section className="pt-8 text-white">
								<article className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
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
							<section className="py-4">
								<Button className="h-[45px] text-base w-[200px] rounded-full bg-blue-600 hover:bg-blue-800 text-white py-4">
									Explore Product <MoveRight className="ml-2 h-4 w-4" />
								</Button>
							</section>
						</section>
						<section>
							<img
								src="/section-7.png"
								className="w-full md:w-[500px] object-contain"
								alt="section"
							/>
						</section>
					</section>
				</section>
				<section className="px-12 py-24 space-y-12">
					<article>
						<h3 className="text-3xl lg:text-5xl font-medium text-center">
							That’s not all, there’s more to it.
						</h3>
					</article>
					<figure>
						<img src="/frame-2.png" alt="frame" />
					</figure>
				</section>
				<section className="h-full w-full flex-col md:flex-row items-center justify-center bg-[#051537] py-12">
					<article className="text-white space-y-4 text-center">
						<h1 className="text-3xl lg:text-6xl font-medium">
							Trusted by industry leaders
						</h1>
						<p className="w-full text-center text-sm lg:text-md px-6 md:px-0">
							Smartworka is the modern, award-winning platform that powers many
							<br />
							of the largest advisory and audit firms.
						</p>
					</article>
					<section className="py-12 w-full">
						<div className="flex flex-col lg:flex-row gap-4 items-center justify-center space-y-4 lg:space-x-20 mb-8">
							{tabs.map((tab, index) => (
								<button
									key={tab.id}
									className={`focus:outline-none ${
										activeTab === index
											? "border-2 rounded-full px-4 py-3 border-white"
											: ""
									}`}
									onClick={() => setActiveTab(index)}
								>
									<img src={tab.logo} alt={`Logo ${index}`} className="w-20" />
								</button>
							))}
						</div>
						<div className="pt-12">{tabs[activeTab].content}</div>
					</section>
				</section>
				<section
					id="contact"
					className="h-full lg:min-h-full w-full py-12 relative"
				>
					<article className="px-12 py-6 lg:py-12 relative z-50">
						<Card className="w-full h-full py-16 rounded-md">
							<CardContent className="flex gap-4 flex-col items-center justify-center">
								<div className="space-y-3">
									<h2 className="text-3xl text-center md:text-6xl">
										Let us worry about your product
									</h2>
									<p className="text-md lg:text-lg mb-8 text-center">
										With{" "}
										<span className="text-blue-600 font-semibold">
											Smartworka
										</span>{" "}
										you can get your product or project set up and manage
										according <br /> to your budget and plans.
									</p>
								</div>

								<div className="flex flex-col md:flex-row gap-4">
									<Button
										className="h-[45px] text-base w-[200px] rounded-full bg-blue-600 hover:bg-blue-800 text-white py-4 transition duration-300"
										onClick={handleSignUp}
									>
										Get Started for free
									</Button>
									<Button className="h-[45px] text-base w-[170px] rounded-full bg-white border-2 border-blue-500 text-blue-600 hover:bg-white py-4 transition duration-300">
										Book a Demo
									</Button>
								</div>
							</CardContent>
						</Card>
					</article>
					<img
						src="/glow.svg"
						alt="Smartworka"
						className="z-40 hidden lg:block absolute top-32 mx-auto w-full"
					/>
				</section>
			</main>
			<footer className="bg-white py-8 mt-16">
				<div className="w-full px-4 md:px-12">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<img src="/Smartworka.svg" alt="logo" className="mb-4 md:mb-0" />
						<nav className="flex flex-col md:flex-row gap-4 md:gap-8 text-center mb-4 md:mb-0">
							<Link href="#about" className="text-gray-600 hover:text-blue-600">
								About
							</Link>
							<Link
								href="#features"
								className="text-gray-600 hover:text-blue-600"
							>
								Features
							</Link>
							<Link href="#works" className="text-gray-600 hover:text-blue-600">
								Works
							</Link>
							<Link
								href="#support"
								className="text-gray-600 hover:text-blue-600"
							>
								Support
							</Link>
						</nav>
						<div className="flex justify-center space-x-4 text-[#0067FF]">
							<Link href="#">
								<FaFacebookF />
							</Link>
							<Link href="#">
								<FaTwitter />
							</Link>
							<Link href="#">
								<FaInstagram />
							</Link>
							<Link href="#">
								<FaLinkedin />
							</Link>
							<Link href="#">
								<FaGithub />
							</Link>
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-center lg:mt-8 mt-4">
						<p className="text-gray-600 text-center md:text-left">
							&copy; Copyright 2024, All Rights Reserved
						</p>
						<div className="flex flex-col items-center md:flex-row gap-4 mt-4 md:mt-0">
							<Link
								href="#privacy"
								className="text-gray-600 hover:text-blue-600"
							>
								Privacy Policy
							</Link>
							<Link href="#terms" className="text-gray-600 hover:text-blue-600">
								Terms & Conditions
							</Link>
						</div>
					</div>
				</div>
			</footer>
			</ReactLenis>
		</>
	);
}
