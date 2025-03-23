import { Globe } from 'lucide-react';

import { LineChart, Shield, Zap } from 'lucide-react';

export const features = [
	{
		title: 'Enterprise Security',
		description: 'Military-grade encryption and advanced threat protection for your data.',
		icon: Shield,
		gradient: 'from-blue-500 to-cyan-500',
	},
	{
		title: 'Global Infrastructure',
		description: 'Distributed data centers ensuring low latency and high availability.',
		icon: Globe,
		gradient: 'from-purple-500 to-pink-500',
	},
	{
		title: 'Scalable Solutions',
		description: 'Flexible resources that grow with your business needs.',
		icon: LineChart,
		gradient: 'from-orange-500 to-red-500',
	},
	{
		title: 'Real-time Analytics',
		description: 'Advanced insights and monitoring for optimal performance.',
		icon: Zap,
		gradient: 'from-green-500 to-emerald-500',
	},
];
