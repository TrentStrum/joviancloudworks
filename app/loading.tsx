export default function Loading() {
	return (
		<div className="min-h-[60vh] w-full flex items-center justify-center">
			<div className="flex flex-col items-center gap-4">
				<div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-r-transparent" />
				<p className="text-muted-foreground animate-pulse">Loading...</p>
			</div>
		</div>
	);
} 