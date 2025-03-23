import { Users, Server, Lock, Clock, Zap, Shield, LineChart, Brain } from 'lucide-react';

export const process = [
	{
		title: 'Initial Consultation',
		description: 'We analyze your needs and design a custom solution.',
		icon: Users,
		modalDetails: [
			{
				title: 'Requirements Gathering',
				description: 'We conduct thorough interviews to understand your business needs and goals.',
				icon: Brain,
			},
			{
				title: 'System Analysis',
				description: 'Assessment of your current infrastructure and technical requirements.',
				icon: LineChart,
			},
			{
				title: 'Solution Design',
				description: 'Creating a tailored solution blueprint based on our findings.',
				icon: Zap,
			},
			{
				title: 'Cost Estimation',
				description: 'Detailed breakdown of implementation costs and timeline.',
				icon: Server,
				link: {
					text: 'Try our Project Calculator',
					href: '/calculator',
				},
			},
		],
	},
	{
		title: 'Infrastructure Setup',
		description: 'Secure deployment of your cloud environment.',
		icon: Server,
		modalDetails: [
			{
				title: 'Environment Setup',
				description: 'Configuring and deploying your cloud infrastructure.',
				icon: Server,
			},
			{
				title: 'Network Configuration',
				description: 'Setting up secure networking and connectivity.',
				icon: Shield,
			},
			{
				title: 'Resource Allocation',
				description: 'Optimizing resource distribution for performance.',
				icon: LineChart,
			},
			{
				title: 'Integration',
				description: 'Connecting with existing systems and services.',
				icon: Zap,
			},
		],
	},
	{
		title: 'Security Implementation',
		description: 'Advanced security measures and compliance protocols.',
		icon: Lock,
		modalDetails: [
			{
				title: 'Security Assessment',
				description: 'Comprehensive analysis of security requirements.',
				icon: Shield,
			},
			{
				title: 'Access Control',
				description: 'Implementing role-based access and authentication.',
				icon: Lock,
			},
			{
				title: 'Data Protection',
				description: 'Setting up encryption and data security measures.',
				icon: Shield,
			},
			{
				title: 'Compliance',
				description: 'Ensuring adherence to industry standards and regulations.',
				icon: Users,
			},
		],
	},
	{
		title: 'Continuous Support',
		description: '24/7 monitoring and technical assistance.',
		icon: Clock,
		modalDetails: [
			{
				title: 'Monitoring',
				description: '24/7 system monitoring and alerting.',
				icon: LineChart,
			},
			{
				title: 'Maintenance',
				description: 'Regular updates and system maintenance.',
				icon: Server,
			},
			{
				title: 'Technical Support',
				description: 'Dedicated support team for issue resolution.',
				icon: Users,
			},
			{
				title: 'Optimization',
				description: 'Continuous performance optimization and improvements.',
				icon: Zap,
			},
		],
	},
];
