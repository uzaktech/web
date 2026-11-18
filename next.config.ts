import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

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

export default withNextIntl(nextConfig);
