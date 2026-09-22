import { StackLabels } from "@/components"

type ProjectType = {
	title: string,
	category: string,
	description: string,
	imagesUrl: string[],
	links?: {label: string, url: string}[], 
	stackLabels: (typeof StackLabels)[number][],
	dateRange?: {start: Date, end?: Date}
	linesCount?: number
}

export const projects = (portfolio?: boolean): ProjectType[] => [
	{
		title: "Dental SaaS",
		category: "Web · Product",
		description: !portfolio 
			? "Full-stack SaaS built for dental clinics, featuring patient and workflow management, PostgreSQL backend, and a production-ready architecture focused on maintainability and reliability."
			: "End-to-end SaaS for dental clinics, combining a modern Next.js frontend with a complex .NET solution with 30+ controllers with 3+ endpoints each, a PostgreSQL database, and Nginx working together with Docker to deliver a scalable, production-focused application.",
		imagesUrl: [
			"/project_captures/dentalv/1.png", 
			"/project_captures/dentalv/2.png", 
			"/project_captures/dentalv/3.png", 
			"/project_captures/dentalv/4.png", 
			"/project_captures/dentalv/5.png", 
			"/project_captures/dentalv/6.png", 
			"/project_captures/dentalv/7.png"
		],
		stackLabels: ["c_sharp", "dot_net", "pgsql", "next_js", "ts", "sass", "react_js", "nodejs"],
		dateRange: {start: new Date(2025, 5, 1), end: new Date(2025, 9, 1)},
		linesCount: 65000
	},
	{
		title: "Fundraising platform",
		category: "Web · Indie",
		description: !portfolio 
			? "Independent full-stack fundraising platform with campaign management, secure Stripe payments, authentication, and a scalable architecture designed from product concept to deployment."
			: "Solo-built fundraising platform integrating Stripe Connect, secure payment workflows, campaign management, and a complete full-stack architecture from design to deployment.",
		imagesUrl: [
			"/project_captures/gd/1.jpeg", 
			"/project_captures/gd/2.jpeg", 
			"/project_captures/gd/3.jpeg", 
			"/project_captures/gd/4.jpeg", 
			"/project_captures/gd/5.jpeg", 
			"/project_captures/gd/6.jpeg", 
			"/project_captures/gd/7.jpeg",
			"/project_captures/gd/8.jpeg",
			"/project_captures/gd/9.jpeg"
		],
		stackLabels: ["c_sharp", "dot_net", "pgsql", "next_js", "ts", "styled", "react_js", "stripe"],
		links: [
			{label: "GitHub (Back-End)", url: "https://github.com/enzoKazuki/greendollar.api"}
		],
		dateRange: {start: new Date(2026, 1, 1), end: new Date(2026, 5, 1)},
		linesCount: 29000
	}
];