import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  	devIndicators: false,
  	reactStrictMode: true,
	compiler: {
		styledComponents: {
			ssr: true,
			displayName: true,
			minify: true,
			pure: true
		}
	}
};

module.exports = nextConfig;

export default nextConfig;