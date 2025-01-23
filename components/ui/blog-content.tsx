'use client';

interface BlogContentProps {
	content: string;
}

export function BlogContent({ content }: BlogContentProps): JSX.Element {
	return (
		<div
			className="prose dark:prose-invert max-w-none 
        [&>ul]:list-disc [&>ul]:ml-4 
        [&>ol]:list-decimal [&>ol]:ml-4 
        [&>p]:mb-4 
        [&>ul]:mb-4 [&>ol]:mb-4 
        [&>ul>li]:mb-2 [&>ol>li]:mb-2"
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	);
}
