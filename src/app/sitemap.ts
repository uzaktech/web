import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://www.uzak.com.br",
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: "https://www.uzak.com.br/about",
			lastModified: new Date(),
			priority: 0.9,
		},
		{
			url: "https://www.uzak.com.br/contact",
			lastModified: new Date(),
			priority: 0.9,
		},
		{
			url: "https://www.uzak.com.br/portfolio",
			lastModified: new Date(),
			priority: 0.8,
		},
	];
}