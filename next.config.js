/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: { unoptimized: true },
	experimental: {
		serverActions: true,
	},
	// Force all pages to be server-side rendered
	output: 'standalone',
};

module.exports = nextConfig;
