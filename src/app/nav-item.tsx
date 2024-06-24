"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavItem({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	return (
		<Link
			href={href}
			className={clsx(
				"flex items-center gap-3 h-12 w-full px-2 text-gray-300 text-[14px] transition-all",
				{
					"bg-blue-700 text-white": pathname === href,
				},
			)}
		>
			{children}
		</Link>
	);
}
