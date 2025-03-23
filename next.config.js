/** @type {import('next').NextConfig} */
const nextConfig = {
	// output: 'export', // Commenting this out to allow dev server to run
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: { unoptimized: true },
};

export default nextConfig;
