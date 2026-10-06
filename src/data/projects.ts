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
		title: "Fundraising platform",
		category: "Web · Indie",
		description: !portfolio 
			? `Independent full-stack fundraising platform with campaign management, secure Stripe payments, authentication, and a scalable architecture designed from concept to deployment. 
			Its distinctive UI/UX was intentionally designed to move away from the polished, standardized look common in modern web products.`
			: `A full-stack fundraising platform integrating Stripe Connect, secure payment workflows, accountability, campaign management, and donations with support for attaching custom Cards to contributions. 
			Its personality comes from a deliberately unconventional UI/UX, designed to give the product a different feeling from the visual conventions common across the modern web.`,
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
		dateRange: {start: new Date(2026, 0, 1), end: new Date(2026, 5, 1)},
		linesCount: 29000
	},
	{
		title: "Dental SaaS",
		category: "Web · Product",
		description: !portfolio 
			? `Full-stack SaaS built for dental clinics, with patient and workflow management, clinic administration, billing, scheduling, and custom PDF document generation. 
			Built with Next.js, .NET, and PostgreSQL around a production-focused architecture designed for reliability and maintainability.`
			: `End-to-end SaaS for dental clinics, combining a Next.js frontend, .NET backend, PostgreSQL database, and Docker-based deployment. 
			The system includes scheduling, user and patient management, clinic administration, billing, clinical workflows, and customizable PDF templates for documents.`,
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
		dateRange: {start: new Date(2025, 5, 1), end: new Date(2026, 2, 1)},
		linesCount: 65000
	},
	{
		title: "Service monitoring SaaS",
		category: "Web · Tool · Indie",
		description: !portfolio 
			? `A minimalist service monitoring SaaS inspired by Grafana. It combines dashboard management with a lightweight local monitoring service capable of collecting custom metrics from specified applications and services through user-defined queries. 
			Built as an experimental project to explore monitoring infrastructure and full-stack architecture.`
			: `One of my first full-stack projects, built as an independent experiment in application monitoring. 
			It was never deployed publicly, but served as a practical exploration of dashboards, custom metric collection, and communication between a web platform and a local monitoring service.`,
		imagesUrl: [
			"/project_captures/pm/1.jpeg", 
			"/project_captures/pm/2.jpeg", 
			"/project_captures/pm/3.jpeg", 
			"/project_captures/pm/4.jpeg", 
			"/project_captures/pm/5.jpeg"
		],
		stackLabels: ["c_sharp", "dot_net", "pgsql", "next_js", "ts", "sass", "react_js", "nodejs"],
		dateRange: {start: new Date(2025, 0, 1), end: new Date(2025, 4, 1)},
		linesCount: 22500
	}
];