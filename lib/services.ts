import { Shield, Database, Rocket } from 'lucide-react';
import { Service } from '@/types/service.types';

export const services: Service[] = [
	{
		id: 'applications',
		title: 'Business Process Automation',
		description:
			'Transform your business operations with intelligent automation solutions that reduce manual effort and increase efficiency.',
		icon: Rocket,
		gradient: 'from-blue-500 to-indigo-500',
		features: [
			{
				name: 'Microsoft Power Apps',
				description:
					'Create custom business applications with low-code solutions that integrate seamlessly with your existing systems.',
				capabilities: [
					'Drag-and-drop app development',
					'Enterprise-grade security controls',
					'Seamless Microsoft 365 integration',
				],
			},
			{
				name: 'Microsoft Power Automate',
				description:
					"Build sophisticated workflows and automate complex business processes with Microsoft's industry-leading automation platform.",
				capabilities: [
					'AI-powered workflow automation',
					'Cross-platform integration capabilities',
					'Real-time process monitoring and analytics',
				],
			},
			{
				name: 'Enterprise Integration',
				description:
					'Connect and streamline your business systems with enterprise-grade automation solutions built for scale.',
				capabilities: [
					'End-to-end process orchestration',
					'Advanced error handling and recovery',
					'Comprehensive audit logging',
				],
			},
		],
	},
	{
		id: 'analytics',
		title: 'Data Analytics & Business Intelligence',
		description:
			'Transform your data into actionable insights with our powerful analytics platform.',
		icon: Database,
		features: [
			{
				name: 'Microsoft Power BI',
				description:
					'Transform your data into actionable insights with our powerful analytics platform.',
				capabilities: [
					'Interactive dashboards',
					'Real-time data visualization',
					'Customizable reports',
				],
			},
			{
				name: 'Microsoft Excel',
				description: 'Analyze and visualize your data with our powerful spreadsheet tool.',
				capabilities: [
					'Interactive charts',
					'Real-time data visualization',
					'Customizable reports',
				],
			},
			{
				name: 'Microsoft SQL Server',
				description:
					'Enterprise-grade relational database management system for mission-critical data storage and analytics.',
				capabilities: [
					'High-performance data processing',
					'Advanced data security and encryption',
					'Intelligent query optimization',
				],
			},
		],
	},
	{
		id: 'full-stack',
		title: 'Full Stack Applications',
		description: 'Build scalable, secure, and maintainable applications with our expert team.',
		icon: Shield,
		features: [
			{
				name: 'Internal Business Applications',
				description: 'Build scalable, secure, and maintainable applications for your business.',
				capabilities: ['Next.js', 'Clerk', 'PostgreSQL', 'Docker', 'AWS', 'CI/CD'],
			},
			{
				name: 'Saas',
				description:
					'We can help you bring your idea to life to start your own application and sell subscriptions',
				capabilities: ['Multi-tenancy', 'Nextjs', 'Clerk', 'PostgreSQL', 'Docker', 'AWS', 'CI/CD'],
			},
			{
				name: 'E-Commerce',
				description: 'Start your own online store, sell your product your way.',
				capabilities: ['Shopify', 'Stripe', 'PayPal', 'OpenCart', 'Magento', 'WooCommerce'],
			},
		],
	},
];
