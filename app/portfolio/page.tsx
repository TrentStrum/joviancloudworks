// import PortfolioPage from './components/PortfolioPage';

// export default function Portfolio(): JSX.Element {
// 	return <PortfolioPage />;
// }

import { redirect } from 'next/navigation';
export default function Page(): JSX.Element {
	redirect('/');
}
