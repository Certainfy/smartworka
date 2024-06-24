"use client";
import {
	Card,
	CardTitle,
	CardContent,
	CardHeader,
	CardDescription,
} from "@/components/ui/card";
import { DatePicker } from "./components/date-picker";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	ArrowDownRight,
	ArrowUpRight,
	FileOutput,
	SearchIcon,
} from "lucide-react";
import LineChart from "./components/line-chart";
import { MdOutlineMoreVert } from "react-icons/md";
import { Button } from "@/components/ui/button";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const tableData = [
	{
		date: "Feb 05, 2024 | 9:00 AM",
		customerName: "Tanimowo Adeola",
		gateWay: "Kuda Bank",
		amount: "₦2,000",
		category: "Subcription",
		status: "Pending",
		icons: <MdOutlineMoreVert />,
	},
	{
		date: "Feb 05, 2024 | 9:00 AM",
		customerName: "Tanimowo Adeola",
		gateWay: "Kuda Bank",
		amount: "₦2,000",
		category: "Subcription",
		status: "Pending",
		icons: <MdOutlineMoreVert />,
	},
	{
		date: "Feb 05, 2024 | 9:00 AM",
		customerName: "Tanimowo Adeola",
		gateWay: "Kuda Bank",
		amount: "₦2,000",
		category: "Subcription",
		status: "Pending",
		icons: <MdOutlineMoreVert />,
	},
	{
		date: "Feb 05, 2024 | 9:00 AM",
		customerName: "Tanimowo Adeola",
		gateWay: "Kuda Bank",
		amount: "₦2,000",
		category: "Subcription",
		status: "Pending",
		icons: <MdOutlineMoreVert />,
	},
	{
		date: "Feb 05, 2024 | 9:00 AM",
		customerName: "Tanimowo Adeola",
		gateWay: "Kuda Bank",
		amount: "₦2,000",
		category: "Subcription",
		status: "Pending",
		icons: <MdOutlineMoreVert />,
	},
	{
		date: "Feb 05, 2024 | 9:00 AM",
		customerName: "Tanimowo Adeola",
		gateWay: "Kuda Bank",
		amount: "₦2,000",
		category: "Subcription",
		status: "Pending",
		icons: <MdOutlineMoreVert />,
	},
	{
		date: "Feb 05, 2024 | 9:00 AM",
		customerName: "Tanimowo Adeola",
		gateWay: "Kuda Bank",
		amount: "₦2,000",
		category: "Subcription",
		status: "Pending",
		icons: <MdOutlineMoreVert />,
	},
];

export default function Page() {
	return (
		<ScrollArea className="px-4 h-[90vh]">
			<main>
				<section className="space-y-3">
					<article className="pt-3">
						<h1 className="text-lg text-blue-700">Hello, Edwin</h1>
						<p className="text-sm text-gray-400">
							You are currently using a business account
						</p>
					</article>
					<article className="flex justify-between items-center px-3">
						<h1 className="text-2xl">Overview</h1>
						<section className="space-x-3">
							<DatePicker />{" "}
							<Button className="bg-blue-700 text-white">
								<FileOutput className="mr-2 size-5" /> Export Report
							</Button>{" "}
						</section>
					</article>
				</section>
				<section className="grid grid-cols-4 gap-4 py-6">
					<Card className="w-full h-[196px]">
						<section className="pt-4 space-y-3 px-3">
							<img
								src="/dash-icon-1.svg"
								alt="dash-icon"
								className=" size-12"
							/>
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
							<img
								src="/dash-icon-2.svg"
								alt="dash-icon"
								className=" size-12"
							/>
							<p className="text-md text-gray-500">Project</p>
							<h2>
								<small className="text-2xl">95</small>{" "}
								<small className="text-lg">/100</small>
							</h2>
							<span className="text-[10px] flex items-center">
								<ArrowDownRight className=" text-red-500 text-[10px]" />
								10% decrease from last month
							</span>
						</section>
					</Card>
					<Card className="w-full h-[196px]">
						<section className="pt-4 space-y-3 px-3">
							<img
								src="/dash-icon-3.svg"
								alt="dash-icon"
								className=" size-12"
							/>
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
							<img
								src="/dash-icon-4.svg"
								alt="dash-icon"
								className=" size-12"
							/>
							<p className="text-md text-gray-500">Resources</p>
							<h2>
								<small className="text-2xl">101</small>{" "}
								<small className="text-lg">/120</small>
							</h2>
							<span className="text-[10px] flex items-center">
								<ArrowUpRight className=" text-green-500 text-[10px]" />
								2% increase from last month
							</span>
						</section>
					</Card>
				</section>
				<section className="py-3">
					<Card className="px-6 py-6">
						<LineChart />
					</Card>
				</section>
				<section>
					<Card>
						<CardHeader className="px-7 space-y-8">
							<section className="flex justify-between items-center px-2">
								<h1 className="text-lg font-semibold">Transcation Count</h1>
								<search className="w-md">
									<Input
										leftIcons={<SearchIcon className="text-gray-400" />}
										type="search"
										placeholder="Search"
										className="px-10"
									/>
								</search>
							</section>
							<CardDescription className="flex items-center justify-between px-4">
								<article className="flex items-center gap-4">
								<article><p className="text-gray-400 text-md">Fliter :</p></article>
									<section>
										<Select>
											<SelectTrigger className="w-[150px]">
												<SelectValue placeholder="All customer" />
											</SelectTrigger>
											<SelectContent className="bg-white">
												<SelectGroup>
													<SelectItem value="apple">Apple</SelectItem>
													<SelectItem value="banana">Banana</SelectItem>
													<SelectItem value="blueberry">Blueberry</SelectItem>
													<SelectItem value="grapes">Grapes</SelectItem>
													<SelectItem value="pineapple">Pineapple</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</section>
									<section>
										<Select>
											<SelectTrigger className="w-[150px]">
												<SelectValue placeholder="All categories" />
											</SelectTrigger>
											<SelectContent className="bg-white">
												<SelectGroup>
									
													<SelectItem value="apple">Apple</SelectItem>
													<SelectItem value="banana">Banana</SelectItem>
													<SelectItem value="blueberry">Blueberry</SelectItem>
													<SelectItem value="grapes">Grapes</SelectItem>
													<SelectItem value="pineapple">Pineapple</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</section>
									<section>
										<Select>
											<SelectTrigger className="w-[150px]">
												<SelectValue placeholder="All status" />
											</SelectTrigger>
											<SelectContent className="bg-white">
												<SelectGroup>
													<SelectItem value="apple">Apple</SelectItem>
													<SelectItem value="banana">Banana</SelectItem>
													<SelectItem value="blueberry">Blueberry</SelectItem>
													<SelectItem value="grapes">Grapes</SelectItem>
													<SelectItem value="pineapple">Pineapple</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</section>
									<section>
										<Select>
											<SelectTrigger className="w-[150px]">
												<SelectValue placeholder="Newest" />
											</SelectTrigger>
											<SelectContent className="bg-white">
												<SelectGroup>
													<SelectItem value="apple">Apple</SelectItem>
													<SelectItem value="banana">Banana</SelectItem>
													<SelectItem value="blueberry">Blueberry</SelectItem>
													<SelectItem value="grapes">Grapes</SelectItem>
													<SelectItem value="pineapple">Pineapple</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</section>
								</article>
								<section>
									<Select>
										<SelectTrigger className="w-[150px]">
											<SelectValue placeholder="Last 30 days" />
										</SelectTrigger>
										<SelectContent className="bg-white">
											<SelectGroup>
												<SelectItem value="apple">Apple</SelectItem>
												<SelectItem value="banana">Banana</SelectItem>
												<SelectItem value="blueberry">Blueberry</SelectItem>
												<SelectItem value="grapes">Grapes</SelectItem>
												<SelectItem value="pineapple">Pineapple</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</section>
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead className="text-gray-400 sm:table-cell">
											Date | Time
										</TableHead>
										<TableHead className="text-gray-400 sm:table-cell">
											Customer Name
										</TableHead>
										<TableHead className=" text-gray-400 sm:table-cell">
											Gateway
										</TableHead>
										<TableHead className="text-gray-400 md:table-cell">
											Amount
										</TableHead>
										<TableHead className=" text-gray-400 md:table-cell">
											Category
										</TableHead>
										<TableHead className=" text-gray-400 md:table-cell">
											Status
										</TableHead>
										<TableHead className="text-right sr-only">Option</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{tableData.map((data, index) => (
										<TableRow className="bg-accent" key={index}>
											<TableCell>
												<div className=" text-gray-400">{data.date}</div>
											</TableCell>
											<TableCell className="sm:table-cell">
												{data.customerName}
											</TableCell>
											<TableCell className="sm:table-cell">
												<div className=" text-gray-400">{data.gateWay}</div>
											</TableCell>
											<TableCell className="sm:table-cell">
												<div className=" text-blue-700">{data.amount}</div>
											</TableCell>
											<TableCell className="sm:table-cell">
												<div className=" text-gray-400">{data.category}</div>
											</TableCell>
											<TableCell className="sm:table-cell">
												<div className="bg-orange-100 text-orange-400 w-fit px-2 py-2 text-xs rounded">
													{data.status}
												</div>
											</TableCell>
											<TableCell className="text-right">{data.icons}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</section>
			</main>
		</ScrollArea>
	);
}
