import type { Metadata } from 'next';

interface ProjectData {
	name: string;
	description?: string;
	// Add other project fields as needed
}

export async function getProjectData(id: string): Promise<ProjectData> {
	// Replace with your actual data fetching logic using the ID
	return {
		name: 'Everything AI',
		description: 'AI-powered features and tools',
	};
}

export async function generateProjectMetadata(
	params: { id: string },
	suffix?: string
): Promise<Metadata> {
	const project = await getProjectData(params.id);
	const titleSuffix = suffix ? ` | ${suffix}` : '';
	
	return {
		title: `${project.name}${titleSuffix}`,
		description: project.description || `Welcome to ${project.name}`,
		openGraph: {
			title: `${project.name}${titleSuffix}`,
			description: project.description || `Welcome to ${project.name}`,
		},
	};
} 

