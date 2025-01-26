import { redirect } from 'next/navigation';
import React from 'react';

import ContactForm from './components/contact';

// export default function Page(): JSX.Element {
// 	return (
// 		<div>
// 			<ContactForm />
// 		</div>
// 	);
// }

export default function Page(): JSX.Element {
	redirect('/');
}
