'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Tabs } from '@/components/ui/tabs';
import { defaultConfig, CalculatorConfig } from './config';
import { TotalCard } from './components/total-card';
import { getCalculatorTabs } from './components/calculator-tabs';
import { exportConfiguration } from './utils/export';

export default function Calculator() {
	const queryClient = useQueryClient();

	const { data: calculatorConfig = defaultConfig } = useQuery({
		queryKey: ['calculator-config'],
		queryFn: () => defaultConfig,
	});

	const updateConfigMutation = useMutation({
		mutationFn: async (newConfig: Partial<CalculatorConfig>) => {
			return {
				...calculatorConfig,
				...newConfig,
			};
		},
		onSuccess: (newConfig) => {
			queryClient.setQueryData(['calculator-config'], newConfig);
		},
	});

	const tabs = getCalculatorTabs({
		calculatorConfig,
		onUpdateConfig: (config) => updateConfigMutation.mutate(config),
	});

	return (
		<main className="min-h-screen bg-black pt-24 pb-32">
			<Container>
				<div className="max-w-5xl mx-auto">
					{/* Header outside the calculator */}
					<div className="mb-12 text-center">
						<h1 className="text-4xl font-bold text-white mb-4">Project Calculator</h1>
						<p className="text-lg text-white/60">
							Customize your project and get an instant cost estimate
						</p>
					</div>

					{/* Calculator */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<div className="space-y-8">
							<Tabs tabs={tabs} />
							<TotalCard
								calculatorConfig={calculatorConfig}
								onExport={() => exportConfiguration(calculatorConfig)}
							/>
						</div>
					</motion.div>
				</div>
			</Container>
		</main>
	);
}
