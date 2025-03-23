import { CalculatorConfig } from '../config';
import { computingUnits, storageOptions, bandwidthOptions, securityLevels } from '../config';

interface ServiceData {
	label?: string;
	price?: number;
}

const calculateLineTotal = (price: number = 0, quantity: string) => {
	return price * parseInt(quantity);
};

const calculateTotal = (config: CalculatorConfig) => {
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

export const exportConfiguration = (calculatorConfig: CalculatorConfig) => {
	// Prepare data in a format suitable for CSV
	const data = {
		computing: computingUnits.find((u) => u.value === calculatorConfig.computing),
		storage: storageOptions.find((u) => u.value === calculatorConfig.storage),
		bandwidth: bandwidthOptions.find((u) => u.value === calculatorConfig.bandwidth),
		security: securityLevels.find((u) => u.value === calculatorConfig.security),
	};

	const formatServiceRow = (category: string, service: ServiceData, quantity: string) => [
		category,
		service?.label || '',
		quantity,
		`$${service?.price || 0}`,
		`$${calculateLineTotal(service?.price, quantity)}`,
	];

	// Create CSV content
	const csvContent = [
		['Cloud Configuration Summary'],
		['Category', 'Service', 'Quantity', 'Price/Unit', 'Total'],
		formatServiceRow('Computing', data.computing, calculatorConfig.computingQty),
		formatServiceRow('Storage', data.storage, calculatorConfig.storageQty),
		formatServiceRow('Bandwidth', data.bandwidth, calculatorConfig.bandwidthQty),
		formatServiceRow('Security', data.security, calculatorConfig.securityQty),
		[''],
		[
			'Duration',
			`${calculatorConfig.months[0]} ${calculatorConfig.months[0] === 1 ? 'month' : 'months'}`,
		],
		['Total Cost', `$${calculateTotal(calculatorConfig)}`],
	]
		.map((row) => row.join(','))
		.join('\n');

	// Create and download the CSV file
	const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = 'cloud-configuration.csv';
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
};
