'use client';

import dynamic from 'next/dynamic';

interface RichTextEditorProps {
	value: string;
	onValueChange: (value: string) => void;
}

export function RichTextEditor({ value, onValueChange }: RichTextEditorProps): JSX.Element {
	const RichTextEditorCore = dynamic(
		() => import('./rich-text-editor-core').then((mod) => mod.RichTextEditor),
		{
			ssr: false,
			loading: () => (
				<div className="w-full h-[200px] rounded-md border border-input bg-background" />
			),
		}
	);
	return <RichTextEditorCore value={value} onValueChange={onValueChange} />;
}
