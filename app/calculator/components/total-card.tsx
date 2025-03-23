'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Download, Rocket } from 'lucide-react';
import { CalculatorConfig } from '../config';
import { computingUnits, storageOptions, bandwidthOptions, securityLevels } from '../config';

interface TotalCardProps {
	calculatorConfig: CalculatorConfig;
	onExport: () => void;
}

export function TotalCard({ calculatorConfig, onExport }: TotalCardProps) {
	const calculateTotal = () => {
		const computingCost =
			computingUnits.find((u) => u.value === calculatorConfig.computing)?.price || 0;
		const storageCost =
			storageOptions.find((u) => u.value === calculatorConfig.storage)?.price || 0;
		const bandwidthCost =
			bandwidthOptions.find((u) => u.value === calculatorConfig.bandwidth)?.price || 0;
		const securityCost =
			securityLevels.find((u) => u.value === calculatorConfig.security)?.price || 0;

		const total =
			(computingCost * parseInt(calculatorConfig.computingQty) +
				storageCost * parseInt(calculatorConfig.storageQty) +
				bandwidthCost * parseInt(calculatorConfig.bandwidthQty) +
				securityCost * parseInt(calculatorConfig.securityQty)) *
			calculatorConfig.months[0];

		return total;
	};

	return (
		<Card className="bg-black/40 border-white/10 backdrop-blur-sm">
			<CardContent className="pt-6">
				<div className="space-y-6">
					<div className="text-center">
						<p className="text-lg font-medium mb-2 text-white/80">Estimated Total Cost</p>
						<p className="text-4xl font-bold text-white">${calculateTotal()}</p>
						<p className="text-sm text-white/60 mt-2">
							for {calculatorConfig.months[0]}{' '}
							{calculatorConfig.months[0] === 1 ? 'month' : 'months'}
						</p>
						<p className="text-xs text-white/40 mt-3 max-w-md mx-auto">
							* This is an estimated cost for informational purposes only. Final pricing may vary
							based on actual usage, additional services, and specific requirements.
						</p>
					</div>

					<div className="grid grid-cols-2 gap-4 text-sm">
						<div className="space-y-3">
							<div className="space-y-1">
								<p className="text-white/60">Computing Units</p>
								<p className="text-white font-medium">
									{calculatorConfig.computingQty}×{' '}
									{computingUnits.find((u) => u.value === calculatorConfig.computing)?.label}
								</p>
							</div>
							<div className="space-y-1">
								<p className="text-white/60">Storage</p>
								<p className="text-white font-medium">
									{calculatorConfig.storageQty}×{' '}
									{storageOptions.find((u) => u.value === calculatorConfig.storage)?.label}
								</p>
							</div>
						</div>
						<div className="space-y-3">
							<div className="space-y-1">
								<p className="text-white/60">Bandwidth</p>
								<p className="text-white font-medium">
									{calculatorConfig.bandwidthQty}×{' '}
									{bandwidthOptions.find((u) => u.value === calculatorConfig.bandwidth)?.label}
								</p>
							</div>
							<div className="space-y-1">
								<p className="text-white/60">Security</p>
								<p className="text-white font-medium">
									{calculatorConfig.securityQty}×{' '}
									{securityLevels.find((u) => u.value === calculatorConfig.security)?.label}
								</p>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex justify-end gap-4">
				<Button
					onClick={onExport}
					variant="outline"
					className="border-white/10 text-white hover:bg-white/10"
				>
					Export Configuration
					<Download className="ml-2 h-4 w-4" />
				</Button>
				<Button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 border-0">
					Launch Mission
					<Rocket className="ml-2 h-4 w-4" />
				</Button>
			</CardFooter>
		</Card>
	);
}
