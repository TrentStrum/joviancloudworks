/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		serverActions: true,
	},
	productionBrowserSourceMaps: true,
	// Remove any edge runtime configurations
};

module.exports = nextConfig;
