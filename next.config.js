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
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'assets.aceternity.com',
			},
		],
	},
};

module.exports = nextConfig;
