'use client';

import { useCallback } from 'react';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

export function ParticlesBackground() {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadSlim(engine);
	}, []);

	return (
		<div className="absolute inset-0 pointer-events-none">
			<Particles
				id="cosmic-particles"
				init={particlesInit}
				options={{
					fullScreen: {
						enable: true,
						zIndex: 1,
					},
					particles: {
						number: {
							value: 100,
							density: {
								enable: true,
								value_area: 800,
							},
						},
						color: {
							value: '#ffffff',
						},
						shape: {
							type: 'circle',
						},
						opacity: {
							value: 0.5,
							random: true,
							animation: {
								enable: true,
								speed: 1,
								minimumValue: 0.1,
								sync: false,
							},
						},
						size: {
							value: 2,
							random: true,
							animation: {
								enable: true,
								speed: 2,
								minimumValue: 0.1,
								sync: false,
							},
						},
						move: {
							enable: true,
							speed: 0.5,
							direction: 'none',
							random: true,
							straight: false,
							outModes: {
								default: 'out',
							},
							attract: {
								enable: true,
								rotateX: 600,
								rotateY: 1200,
							},
						},
					},
					interactivity: {
						detectsOn: 'canvas',
						events: {
							onHover: {
								enable: true,
								mode: 'grab',
							},
							resize: true,
						},
						modes: {
							grab: {
								distance: 140,
								links: {
									opacity: 0.5,
								},
							},
						},
					},
					background: {
						color: {
							value: 'transparent',
						},
					},
				}}
			/>
		</div>
	);
}
