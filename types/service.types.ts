import { LucideIcon } from 'lucide-react';

export interface ServiceFeature {
	name: string;
	description: string;
	capabilities: string[];
}

export interface Service {
	id: string;
	title: string;
	description: string;
	icon: LucideIcon;
	gradient?: string;
	features: ServiceFeature[];
}

export interface ServiceWithFeatures extends Service {
	features: ServiceFeature[];
}

export type ServiceId = 'applications' | 'analytics' | 'full-stack';

export interface ServiceQueryResult {
	data: Service[];
	isLoading: boolean;
	error: Error | null;
}
