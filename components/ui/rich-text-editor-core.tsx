'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import { cn } from '@/lib/utils';

interface RichTextEditorProps {
	value: string;
	onValueChange: (value: string) => void;
}

export function RichTextEditor({ value, onValueChange }: RichTextEditorProps): JSX.Element {
	const editor = useEditor({
		extensions: [StarterKit],
		content: value,
		editorProps: {
			attributes: {
				class: cn(
					'min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
				),
			},
		},
		onUpdate: ({ editor }) => {
			onValueChange(editor.getHTML());
		},
	});

	return <EditorContent editor={editor} />;
}
