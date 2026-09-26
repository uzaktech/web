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
			? `Independent full-stack fundraising platform with campaign management, secure Stripe payments, authentication, and a scalable architecture designed from product concept to deployment. 
			It has a very unique and not popular UI/UX which makes it as the top feature of the project.`
			: `A full-stack fundraising platform integrating Stripe Connect, secure payment workflows, accountability, campaign management and donations with a possibility to attatch custom Cards to it. It's personality is what makes it stand out, 
			I built the UI/UX the way it is due to personal choice, I wanted to give it a different feeling from what is on display in the web nowadays.`,
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
			? `Full-stack SaaS built for dental clinics, featuring patient and workflow management, PostgreSQL backend, and a production-ready architecture focused on maintainability and reliability. It wraps
			features such as a wired scheduling method, user managment, patient managment with all clinical needs, clinic managment including procedures, billing and custom PDFs templates for documents.`
			: `End-to-end SaaS for dental clinics, combining a modern Next.js frontend with a complex .NET solution with 30+ controllers with 3+ endpoints each, a PostgreSQL database, and Nginx working together with Docker to deliver a scalable, production-focused application. 
			It features, a wired scheduling method, user managment, patient managment with all clinical needs, clinic managment including procedures, billing and custom PDFs templates for documents.`,
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
		title: "Service monitoring SaaS",
		category: "Web · Tool · Indie",
		description: !portfolio 
			? "A minimalist independent full-stack service monitoring SaaS inspired by Grafana, where its possible to donwload a local service to watch determined parameters of specified services/applications throught custom queries. It's a independent experimental project and it's not deployed."
			: `A simple independent full-stack service monitoring SaaS inspired by Grafana, featuring dashboards managment throught folders and organizations, where it's possible to donwload an local service to watch determined parameters of specified services/applications throught custom queries. 
			It's also one of my first full-stack projects and hasn't been deployed by the reason that it was made as an experimental project.`,
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