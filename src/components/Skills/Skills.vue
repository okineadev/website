<template>
	<div class="skills">
		<div class="section programming" aria-labelledby="programming-skills-title">
			<h2 id="programming-skills-title"><i-lucide-code-xml /> Programming</h2>

			<ProgrammingSection />
		</div>

		<div class="section design" aria-labelledby="design-skills-title">
			<h2 id="design-skills-title"><i-lucide-palette /> Design</h2>

			<DesignSection />
		</div>
	</div>
</template>

<style lang="scss">
.skills {
	display: flex;
	flex-direction: row;

	gap: 48px;
	justify-content: center;
	max-width: 1200px;

	margin-inline: auto;
	flex-wrap: wrap;

	.section {
		display: flex;
		flex-direction: column;

		flex-wrap: nowrap;

		.skills-list {
			$gap: 15px;
			$icon-size: 50px;

			display: flex;
			flex-wrap: wrap;
			gap: $gap;

			max-width: 640px;
			width: 100%;

			// Skill icon
			a {
				display: inline-flex;
				position: relative;
				margin: calc(-1 * $gap);
				padding: $gap;
				flex: 0 0 auto;
				user-select: none;

				img {
					display: block;

					height: $icon-size;
					// Ensure consistent size for all img elements
					width: $icon-size;

					@media (prefers-reduced-motion: no-preference) {
						transition: all 0.2s ease-in-out;
					}
				}

				&::after {
					content: '';
					$height: 4px;
					display: block;
					width: 36px;
					opacity: 0;
					height: $height;
					background-color: #6a6a6a;
					position: absolute;
					left: 50%;
					bottom: calc($height * 2.5);
					transform: translateX(-50%);
					// bottom: $height;
					border-radius: $height;

					@media (prefers-reduced-motion: no-preference) {
						transition:
							opacity 0.4s
								linear(
									0 0%,
									0 1.8%,
									0.01 3.6%,
									0.03 6.35%,
									0.07 9.1%,
									0.13 11.4%,
									0.19 13.4%,
									0.27 15%,
									0.34 16.1%,
									0.54 18.35%,
									0.66 20.6%,
									0.72 22.4%,
									0.77 24.6%,
									0.81 27.3%,
									0.85 30.4%,
									0.88 35.1%,
									0.92 40.6%,
									0.94 47.2%,
									0.96 55%,
									0.98 64%,
									0.99 74.4%,
									1 86.4%,
									1 100%
								),
							width 0.2s ease-out;
					}
				}

				&:hover img {
					transform: translateY(-8px);
				}

				&:hover::after {
					opacity: 1;
					width: 44px;
				}
			}
		}

		&.design .skills-list {
			width: 115px;
		}
	}
}

@media (max-width: 890px) {
	.skills {
		flex-wrap: wrap;
		.section {
			align-items: center;
			.skills-list {
				justify-content: center;
			}
		}
	}
}
</style>
