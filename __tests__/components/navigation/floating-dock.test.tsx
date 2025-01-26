import { render, screen, fireEvent } from '@testing-library/react';

import { FloatingDock } from '@/components/layout/FloatingDock';

describe('FloatingDock', () => {
	it('renders social links correctly', () => {
		render(<FloatingDock />);

		expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
		expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
		expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
		expect(screen.getByLabelText('Email')).toBeInTheDocument();
	});

	it('shows scroll to top button when scrolled', () => {
		render(<FloatingDock />);

		// Simulate scroll
		global.window.scrollY = 500;
		fireEvent.scroll(window);

		expect(screen.getByText('Scroll to Top')).toBeInTheDocument();
	});
});
