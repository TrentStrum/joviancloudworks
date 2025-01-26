'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import dynamic from 'next/dynamic';

import { cn } from '@/lib/utils';

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

