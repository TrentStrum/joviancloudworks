import React from 'react';
import ContactForm from './components/contact';

// export default function Page(): JSX.Element {
// 	return (
// 		<div>
// 			<ContactForm />
// 		</div>
// 	);
// }

import { redirect } from 'next/navigation';
export default function Page(): JSX.Element {
	redirect('/');
}