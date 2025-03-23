export interface CalculatorConfig {
	computing: string;
	computingQty: string;
	storage: string;
	storageQty: string;
	bandwidth: string;
	bandwidthQty: string;
	security: string;
	securityQty: string;
	months: number[];
}

export const defaultConfig: CalculatorConfig = {
	computing: 'basic',
	computingQty: '1',
	storage: 'small',
	storageQty: '1',
	bandwidth: 'basic',
	bandwidthQty: '1',
	security: 'asteroid',
	securityQty: '1',
	months: [1],
};

export const computingUnits = [
	{ value: 'basic', label: 'Basic (2 JU)', price: 50 },
	{ value: 'standard', label: 'Standard (4 JU)', price: 100 },
	{ value: 'premium', label: 'Premium (8 JU)', price: 200 },
];

export const storageOptions = [
	{ value: 'small', label: 'Small Nebula (100GB)', price: 20 },
	{ value: 'medium', label: 'Medium Nebula (500GB)', price: 80 },
	{ value: 'large', label: 'Large Nebula (1TB)', price: 150 },
];

export const bandwidthOptions = [
	{ value: 'basic', label: 'Standard Transfer (1Gbps)', price: 30 },
	{ value: 'fast', label: 'Fast Transfer (5Gbps)', price: 100 },
	{ value: 'ultra', label: 'Ultra Transfer (10Gbps)', price: 200 },
];

export const securityLevels = [
	{ value: 'asteroid', label: 'Asteroid Shield (Basic)', price: 50 },
	{ value: 'meteor', label: 'Meteor Shield (Advanced)', price: 100 },
	{ value: 'giant', label: 'Gas Giant Protection (Enterprise)', price: 200 },
];

export const quantityOptions = Array.from({ length: 10 }, (_, i) => ({
	value: (i + 1).toString(),
	label: `${i + 1} ${i === 0 ? 'Unit' : 'Units'}`,
}));

export const calculateTotal = (config: CalculatorConfig) => {
	const computingCost = computingUnits.find((u) => u.value === config.computing)?.price || 0;
	const storageCost = storageOptions.find((u) => u.value === config.storage)?.price || 0;
	const bandwidthCost = bandwidthOptions.find((u) => u.value === config.bandwidth)?.price || 0;
	const securityCost = securityLevels.find((u) => u.value === config.security)?.price || 0;

	const total =
		(computingCost * parseInt(config.computingQty) +
			storageCost * parseInt(config.storageQty) +
			bandwidthCost * parseInt(config.bandwidthQty) +
			securityCost * parseInt(config.securityQty)) *
		config.months[0];

	return total;
};
