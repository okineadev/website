<template>
	<div class="dynamic-blobs-container" aria-hidden="true">
		<div class="blue blob"></div>
		<div class="cyan blob"></div>
		<div class="purple blob"></div>
	</div>
</template>

<style lang="scss">
@use '../animations/keyframes.scss';

@media (max-width: 890px) {
	.dynamic-blobs-container {
		display: none;
	}
}

// Blob container styles
.dynamic-blobs-container {
	position: relative;
	z-index: -3;

	width: 250px;
	height: 250px;
	/* position: absolute; */
	/* right: calc((100% - 50rem) / 2 + 25px); */
	top: 40px;

	margin-inline: auto;

	// Fade animation for the dynamic blobs container (not infinite)
	@media (prefers-reduced-motion: no-preference) {
		animation: fade 1.5s ease-out forwards;
	}

	.blob {
		border-radius: 100px;
		filter: blur(75px);

		position: absolute;

		&.blue {
			background-color: var(--blue-gradient-blob-color);

			height: 225px;
			width: 225px;

			@keyframes blue {
				0% {
					top: 100px;
					left: 50px;

					transform: scale(1);
				}
				30% {
					top: 120px;
					left: 100px;

					transform: scale(1.1);
				}
				60% {
					top: 80px;
					left: 0;

					transform: scale(1.2);
				}
				100% {
					top: 100px;
					left: 50px;

					transform: scale(1);
				}
			}

			@media (prefers-reduced-motion: no-preference) {
				animation: blue 8s infinite ease;
			}

			@media (prefers-reduced-motion) {
				top: 120px;
				left: 100px;

				transform: scale(1.1);
			}
		}

		&.cyan {
			background-color: var(--cyan-gradient-blob-color);

			height: 120px;
			width: 170px;

			@keyframes cyan {
				0% {
					top: 30px;
					right: -20px;

					transform: scale(1.1);
				}
				30% {
					top: 50px;
					right: -20px;

					transform: scale(1);
				}
				60% {
					top: 40px;
					right: 40px;

					transform: scale(1);
				}
				100% {
					top: 30px;
					right: -20px;

					transform: scale(1.1);
				}
			}

			@media (prefers-reduced-motion: no-preference) {
				animation: cyan 8s infinite ease;
			}

			@media (prefers-reduced-motion) {
				top: 50px;
				right: -20px;

				transform: scale(1);
			}
		}

		&.purple {
			background-color: var(--purple-gradient-blob-color);

			height: 150px;
			width: 150px;

			@keyframes purple {
				0% {
					top: 170px;
					right: 0px;

					transform: scale(0.9);
				}
				30% {
					top: 220px;
					right: 80px;

					transform: scale(1.1);
				}
				60% {
					top: 220px;
					right: -80px;

					transform: scale(1);
				}
				100% {
					top: 170px;
					right: 0px;

					transform: scale(0.9);
				}
			}

			@media (prefers-reduced-motion: no-preference) {
				animation: purple 8s infinite linear;
			}

			@media (prefers-reduced-motion) {
				top: 190px;
				right: 60px;

				transform: scale(1.1);
			}
		}
	}
}
</style>
