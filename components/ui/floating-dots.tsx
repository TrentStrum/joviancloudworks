'use client';

import { useEffect, useRef } from 'react';

export const FloatingDots = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const dots: { x: number; y: number; vx: number; vy: number }[] = [];
		const numDots = 50;

		// Initialize dots
		for (let i = 0; i < numDots; i++) {
			dots.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * 0.5,
				vy: (Math.random() - 0.5) * 0.5,
			});
		}

		const animate = () => {
			if (!canvas || !ctx) return;

			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';

			dots.forEach((dot, i) => {
				dot.x += dot.vx;
				dot.y += dot.vy;

				if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
				if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

				ctx.beginPath();
				ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
				ctx.fill();

				// Connect nearby dots
				dots.slice(i + 1).forEach((otherDot) => {
					const dx = dot.x - otherDot.x;
					const dy = dot.y - otherDot.y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < 100) {
						ctx.beginPath();
						ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
						ctx.moveTo(dot.x, dot.y);
						ctx.lineTo(otherDot.x, otherDot.y);
						ctx.stroke();
					}
				});
			});

			requestAnimationFrame(animate);
		};

		const resizeCanvas = () => {
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
		};

		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);
		animate();

		return () => {
			window.removeEventListener('resize', resizeCanvas);
		};
	}, []);

	return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};
