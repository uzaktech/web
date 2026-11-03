import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://www.uzak.com.br";
	const lastModified = new Date();
	
	return [
		{
			url: `${baseUrl}`,
			lastModified,
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified,
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/portfolio`,
			lastModified,
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified,
			changeFrequency: 'yearly',
			priority: 0.7,
		},
	];
}