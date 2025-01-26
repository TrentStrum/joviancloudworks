'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import dynamic from 'next/dynamic';

import { cn } from '@/lib/utils';

const RichTextEditor = dynamic(
	() => import('./rich-text-editor-core').then((mod) => mod.RichTextEditor),
	{
		ssr: false,
		loading: () => (
			<div className="w-full h-[200px] rounded-md border border-input bg-background" />
		),
	}
);

export { RichTextEditor };
