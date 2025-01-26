/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output: 'standalone',
	experimental: {
		serverActions: true,
	},
	productionBrowserSourceMaps: true,
	// Remove any edge runtime configurations
};

module.exports = nextConfig;
