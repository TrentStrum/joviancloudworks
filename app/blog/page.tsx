// import BlogPage from '@/app/blog/components/BlogPage';

// export default function BlogGridPage(): JSX.Element {
// 	return <BlogPage />;
// }
import { redirect } from 'next/navigation';
export default function Page(): JSX.Element {
	redirect('/');
}
