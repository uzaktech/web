"use client";

const ageDiff = process.env.NEXT_PUBLIC_BIRTH_DATE ? Math.abs(new Date(process.env.NEXT_PUBLIC_BIRTH_DATE).getTime() - new Date().getTime()) : null;

export const quickFacts = [
	{
		label: "Role",
		value: "Full-stack Developer"
	},
	{
		label: "Focus",
		value: "Web Development"
	},
	{
		label: "Experience",
		value: "4 years"
	},
	{
		label: "Location",
		value: "Paraíba, Brazil"
	},
	{
		label: "Age",
		value: ageDiff
			? `${Math.floor(ageDiff / 31557600000)} years`
			: "undefined"
	},
	{
		label: "Alias",
		value: "Uzak"
	},
]