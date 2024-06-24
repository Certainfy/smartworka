import React from "react";
import { Label } from "@/components/ui/label";
import { FormInput } from "@/components/ui/formInput";

export default function BusinessStepSecond() {
	return (
		<div className="py-4">
			<article className="pb-6">
				<h1 className="text-3xl">Business address</h1>
				<p className="text-sm text-gray-400">
					We need you to enter your correct detail of the neccessary
				</p>
			</article>

			<section className="space-y-6">
				<div className="grid w-full gap-2">
					<Label htmlFor="message">Company address*</Label>
					<FormInput className="w-full" placeholder="Ex: Lagos" id="message" />
				</div>
				<div className="grid w-full gap-2">
					<Label htmlFor="message">Country*</Label>
					<FormInput
						className="w-full"
						placeholder="Ex: Nigeria"
						id="message"
					/>
				</div>
				<div>
					<Label htmlFor="message">State*</Label>
					<FormInput className="w-full" placeholder="Ex: Lagos" id="message" />
				</div>
				<section className="flex items-center gap-4">
					<div className="grid w-full gap-2">
						<Label htmlFor="message">LGA*</Label>
						<FormInput
							className="w-full"
							placeholder="Ex: Etiosa"
							id="message"
						/>
					</div>
					<div className="grid w-full gap-2">
						<Label htmlFor="message">Postal Code*</Label>
						<FormInput
							className="w-full"
							placeholder="Ex: 10001"
							id="message"
						/>
					</div>
				</section>
			</section>
		</div>
	);
}
