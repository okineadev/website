<script setup>
import Icon from './Other/Icon.vue';
import { ref } from 'vue';

const copied = ref(false);
const showTooltip = ref(false);

const copyCode = () => {
	const codeContent = document.querySelector('.code code').textContent;
	navigator.clipboard
		.writeText(codeContent)
		.then(() => {
			copied.value = true;
			showTooltip.value = true;
			setTimeout(() => {
				copied.value = false;
				showTooltip.value = false;
			}, 2000);
		})
		.catch((err) => {
			console.error('Failed to copy:', err);
		});
};
</script>

<template>
	<div class="code">
		<code><slot></slot></code>
		<div class="icon-wrapper">
			<Icon :name="copied ? 'check' : 'copy'" @click="copyCode" :title="copied ? 'Copied!' : 'Copy to clipboard'" />
			<span class="tooltip" :class="{ show: showTooltip }">Copied!</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.code {
	font-family: 'Fira Code', monospace;
	padding: 14px;
	background-color: var(--code-background);
	color: var(--code-font-color);
	border-radius: 15px;
	overflow-x: auto;
	width: 100%;
	max-width: 500px;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	font-size: 15px;
	box-shadow: var(--box-shadow);

	.icon-wrapper {
		position: relative;

		.icon {
			cursor: pointer;
			width: 20px;
			transition: transform 0.2s ease;
			padding: 5px;
			margin: -5px;
			box-sizing: content-box;

			&:hover {
				transform: scale(1.1);
			}

			&:active {
				transform: scale(0.95);
			}
		}

		.tooltip {
			position: absolute;
			background-color: var(--theme-color);
			color: var(--text-color);
			padding: 4px 8px;
			border-radius: 4px;
			font-size: 12px;
			right: 100%;
			top: 50%;
			transform: translateY(-50%);
			margin-right: 8px;
			opacity: 0;
			visibility: hidden;
			transition: opacity 0.2s ease;
			box-shadow: var(--box-shadow);

			&.show {
				opacity: 1;
				visibility: visible;
			}
		}
	}
}
</style>
