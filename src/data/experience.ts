import { StackLabels } from "@/components"

export type ExperiencesType = {
	title: string,
	category: string,
	description: string[],
	links?: {label: string, url: string}[], 
	dateRange?: {start: Date, end?: Date}
	stackLabels: (typeof StackLabels)[number][],
}

export const experiences: ExperiencesType[] = [
	{
		title: "React Developer",
		category: "youbloom · Internship",
		description: [
			"React Developer intern on a 10+ person tech team at youbloom, a live events platform helping artists, venues, and promoters grow audiences for music, comedy, and theatre. I build and ship features across the web platform while fixing bugs, working closely with the product and engineering team using React, TypeScript, and Vite.",
			"In my first weeks I fixed two UI glitches, then built a new page for editing Campaign Updates and adjusted the related redirections."
		],
		links: [{label: "youbloom", url: "https://www.youbloom.com"}],
		stackLabels: ["react_js", "vite", "ts"],
		dateRange: {start: new Date(2026, 8, 1)}
	},
	{
		title: "Full-stack Developer",
		category: "Product · SaaS",
		description: [
			"Built an end-to-end SaaS product for dental clinics as one of the products of a software studio. I handled the entire technical side, from the frontend and backend to the database, deployment, and infrastructure.",
			"I built a backend with 150+ endpoints in C# and .NET on PostgreSQL, plus a Next.js frontend styled with SCSS. The product launched in production, and the first clinic signed up less than 2 weeks after deployment.",
			"I also handled a cryptojacking incident on the hosting VPS: I closed exposed firewall ports, rotated the SSH keys, and rebooted and secured the server."
		],
		links: [{label: "Studio website", url: "https://www.vexiostudio.com.br"}],
		stackLabels: ["c_sharp", "dot_net", "pgsql", "next_js", "ts", "sass", "react_js", "nodejs"],
		dateRange: {start: new Date(2025, 5, 1), end: new Date(2025, 9, 1)}
	},
	{
		title: "Web Development Assistant",
		category: "Consulting project",
		description: [
			"Supported a consulting project focused on improving the structure and stability of an existing web application. I worked mainly on the Next.js and React side, fixing bugs and implementing small features alongside the main consultant. I also investigated and fixed a Python issue when needed.",
			"I resolved 20+ bugs across the Next.js and React codebase, including a Python issue involving the Selenium library."
		],
		stackLabels: ["next_js", "ts", "react_js", "docker", "nodejs", "python"],
		dateRange: {start: new Date(2024, 1, 1), end: new Date(2024, 3, 1)}
	}
]