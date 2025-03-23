'use client';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { CalculatorConfig } from '../config';
import {
	computingUnits,
	storageOptions,
	bandwidthOptions,
	securityLevels,
	quantityOptions,
} from '../config';

interface CalculatorTabsProps {
	calculatorConfig: CalculatorConfig;
	onUpdateConfig: (config: Partial<CalculatorConfig>) => void;
}

export function getCalculatorTabs({ calculatorConfig, onUpdateConfig }: CalculatorTabsProps) {
	return [
		{
			title: 'Product',
			value: 'product',
			content: (
				<div className="w-full overflow-hidden relative h-full p-10 text-xl md:text-4xl font-bold text-white">
					<h2 className="mb-8">Infrastructure Configuration</h2>
					<div className="space-y-8 text-base font-normal">
						{/* Computing Units */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">Computing Units</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<Select
									value={calculatorConfig.computing}
									onValueChange={(value) => onUpdateConfig({ computing: value })}
								>
									<SelectTrigger className="bg-white/10 border-white/20">
										<SelectValue placeholder="Select computing unit" />
									</SelectTrigger>
									<SelectContent>
										{computingUnits.map((unit) => (
											<SelectItem key={unit.value} value={unit.value}>
												{unit.label} - ${unit.price}/month
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<Select
									value={calculatorConfig.computingQty}
									onValueChange={(value) => onUpdateConfig({ computingQty: value })}
								>
									<SelectTrigger className="bg-white/10 border-white/20">
										<SelectValue placeholder="Select quantity" />
									</SelectTrigger>
									<SelectContent>
										{quantityOptions.map((option) => (
											<SelectItem key={option.value} value={option.value}>
												{option.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
						</div>

						{/* Storage */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">Storage</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<Select
									value={calculatorConfig.storage}
									onValueChange={(value) => onUpdateConfig({ storage: value })}
								>
									<SelectTrigger className="bg-white/10 border-white/20">
										<SelectValue placeholder="Select storage option" />
									</SelectTrigger>
									<SelectContent>
										{storageOptions.map((option) => (
											<SelectItem key={option.value} value={option.value}>
												{option.label} - ${option.price}/month
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<Select
									value={calculatorConfig.storageQty}
									onValueChange={(value) => onUpdateConfig({ storageQty: value })}
								>
									<SelectTrigger className="bg-white/10 border-white/20">
										<SelectValue placeholder="Select quantity" />
									</SelectTrigger>
									<SelectContent>
										{quantityOptions.map((option) => (
											<SelectItem key={option.value} value={option.value}>
												{option.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
						</div>

						{/* Bandwidth */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">Bandwidth</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<Select
									value={calculatorConfig.bandwidth}
									onValueChange={(value) => onUpdateConfig({ bandwidth: value })}
								>
									<SelectTrigger className="bg-white/10 border-white/20">
										<SelectValue placeholder="Select bandwidth option" />
									</SelectTrigger>
									<SelectContent>
										{bandwidthOptions.map((option) => (
											<SelectItem key={option.value} value={option.value}>
												{option.label} - ${option.price}/month
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<Select
									value={calculatorConfig.bandwidthQty}
									onValueChange={(value) => onUpdateConfig({ bandwidthQty: value })}
								>
									<SelectTrigger className="bg-white/10 border-white/20">
										<SelectValue placeholder="Select quantity" />
									</SelectTrigger>
									<SelectContent>
										{quantityOptions.map((option) => (
											<SelectItem key={option.value} value={option.value}>
												{option.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
						</div>
					</div>
				</div>
			),
		},
		{
			title: 'Services',
			value: 'services',
			content: (
				<div className="w-full overflow-hidden relative h-full p-10 text-xl md:text-4xl font-bold text-white">
					<h2 className="mb-8">Security Configuration</h2>
					<div className="space-y-4 text-base font-normal">
						<h3 className="text-lg font-semibold">Security Level</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<Select
								value={calculatorConfig.security}
								onValueChange={(value) => onUpdateConfig({ security: value })}
							>
								<SelectTrigger className="bg-white/10 border-white/20">
									<SelectValue placeholder="Select security level" />
								</SelectTrigger>
								<SelectContent>
									{securityLevels.map((level) => (
										<SelectItem key={level.value} value={level.value}>
											{level.label} - ${level.price}/month
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<Select
								value={calculatorConfig.securityQty}
								onValueChange={(value) => onUpdateConfig({ securityQty: value })}
							>
								<SelectTrigger className="bg-white/10 border-white/20">
									<SelectValue placeholder="Select quantity" />
								</SelectTrigger>
								<SelectContent>
									{quantityOptions.map((option) => (
										<SelectItem key={option.value} value={option.value}>
											{option.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>
			),
		},
		{
			title: 'Duration',
			value: 'duration',
			content: (
				<div className="w-full overflow-hidden relative h-full p-10 text-xl md:text-4xl font-bold text-white">
					<h2 className="mb-8">Duration Configuration</h2>
					<div className="space-y-4 text-base font-normal">
						<h3 className="text-lg font-semibold">Duration (months)</h3>
						<Slider
							value={calculatorConfig.months}
							onValueChange={(value) => onUpdateConfig({ months: value })}
							min={1}
							max={12}
							step={1}
							className="w-full"
						/>
						<p className="text-sm text-white/70">
							Selected duration: {calculatorConfig.months[0]}{' '}
							{calculatorConfig.months[0] === 1 ? 'month' : 'months'}
						</p>
					</div>
				</div>
			),
		},
		{
			title: 'Content',
			value: 'content',
			content: (
				<div className="w-full overflow-hidden relative h-full p-10 text-xl md:text-4xl font-bold text-white">
					<h2 className="mb-8">Content Tab</h2>
					<p className="text-base font-normal">Content configuration options will go here...</p>
				</div>
			),
		},
		{
			title: 'Random',
			value: 'random',
			content: (
				<div className="w-full overflow-hidden relative h-full p-10 text-xl md:text-4xl font-bold text-white">
					<h2 className="mb-8">Random Tab</h2>
					<p className="text-base font-normal">Random configuration options will go here...</p>
				</div>
			),
		},
	];
}
