<style lang="scss" src="../scss/dynamic-blobs.scss"></style>

<template>
	<div class="dynamic-blobs-container" aria-hidden="true">
		<div class="blue blob"></div>
		<div class="cyan blob"></div>
		<div class="purple blob"></div>
	</div>
</template>

<style lang="scss">
@media (max-width: 890px) {
	.dynamic-blobs-container {
		display: none;
	}
}
</style>
