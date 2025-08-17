<template>
	<div
		class="pointer-ring"
		:class="{ 'is-link': isHoveringLink }"
		:style="{
			transform: `translateX(${cursorX - linkWidth / 2}px) translateY(${cursorY - linkHeight / 2}px) scale(${scale})`,
			opacity: opacity,
			width: isHoveringLink ? `${linkWidth}px` : '30px',
			height: isHoveringLink ? `${linkHeight}px` : '30px',
			borderRadius: isHoveringLink ? `${linkBorderRadius}px` : '100px',
		}"
	/>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Configuration constants - easy to adjust
const CURSOR_SIZE = 30 // Default cursor size in pixels
const DEFAULT_BORDER_RADIUS = 15 // Default cursor border radius
const LINK_BORDER_RADIUS = 8 // Default border radius for links
const LINK_PADDING = 4 // Extra padding around links
const MOUSE_FOLLOW_STRENGTH = 0.1 // How much cursor follows mouse (0-1)
const FADE_OUT_DELAY = 1000 // Time before cursor fades out (ms)
const CLICK_SCALE_UP = 1.4 // Scale when clicking
const CLICK_SCALE_DOWN = 0.8 // Scale after click
const SCALE_RECOVERY_TIME = 100 // Time to return to normal scale (ms)

// Reactive state variables
const mouseX = ref(0)
const mouseY = ref(0)
const cursorX = ref(0)
const cursorY = ref(0)
const opacity = ref(0)
const scale = ref(1)
const isHoveringLink = ref(false)
const linkWidth = ref(CURSOR_SIZE)
const linkHeight = ref(CURSOR_SIZE)
const linkBorderRadius = ref(DEFAULT_BORDER_RADIUS)
let timeout: ReturnType<typeof setTimeout>

// Handle mouse movement and link detection
const handleMouseMove = (e: MouseEvent) => {
	mouseX.value = e.clientX
	mouseY.value = e.clientY
	opacity.value = 1

	// Find the closest link element
	const target = e.target as HTMLElement
	const linkElement = target.tagName === 'a' ? target : target.closest('a')

	// Check if hovering over a plain text link (no complex elements inside)
	if (linkElement && !linkElement.querySelector('div, span, img')) {
		isHoveringLink.value = true
		const rect = linkElement.getBoundingClientRect()
		const computedStyle = window.getComputedStyle(linkElement)

		// Set cursor size to match link with padding
		linkWidth.value = rect.width + LINK_PADDING * 2
		linkHeight.value = rect.height + LINK_PADDING * 2
		linkBorderRadius.value = Number.parseInt(computedStyle.borderRadius) || LINK_BORDER_RADIUS

		// Calculate link center position
		const linkCenterX = rect.left + rect.width / 2
		const linkCenterY = rect.top + rect.height / 2

		// Make cursor follow mouse slightly but stay magnetized to link center
		const mouseOffsetX = (mouseX.value - linkCenterX) * MOUSE_FOLLOW_STRENGTH
		const mouseOffsetY = (mouseY.value - linkCenterY) * MOUSE_FOLLOW_STRENGTH

		cursorX.value = linkCenterX + mouseOffsetX
		cursorY.value = linkCenterY + mouseOffsetY
	} else {
		// Reset to normal cursor behavior when not hovering links
		isHoveringLink.value = false
		linkWidth.value = CURSOR_SIZE
		linkHeight.value = CURSOR_SIZE
		linkBorderRadius.value = DEFAULT_BORDER_RADIUS
		cursorX.value = mouseX.value
		cursorY.value = mouseY.value
	}

	// Reset fade out timer
	clearTimeout(timeout)
	timeout = setTimeout(() => {
		opacity.value = 0
	}, FADE_OUT_DELAY)
}

// Handle mouse click - scale up
const handleMouseDown = () => {
	scale.value = CLICK_SCALE_UP
}

// Handle mouse release - scale down then back to normal
const handleMouseUp = () => {
	scale.value = CLICK_SCALE_DOWN

	setTimeout(() => {
		scale.value = 1
	}, SCALE_RECOVERY_TIME)
}

// Set up event listeners when component mounts
onMounted(() => {
	document.addEventListener('mousemove', handleMouseMove)
	document.addEventListener('mousedown', handleMouseDown)
	document.addEventListener('mouseup', handleMouseUp)
})

// Clean up event listeners when component unmounts
onUnmounted(() => {
	document.removeEventListener('mousemove', handleMouseMove)
	document.removeEventListener('mousedown', handleMouseDown)
	document.removeEventListener('mouseup', handleMouseUp)
	clearTimeout(timeout)
})
</script>

<style lang="scss" scoped>
.pointer-ring {
	left: 0;
	top: 0;
	height: 30px;
	width: 30px;
	border-radius: 100px;
	border: 1px solid var(--link-color);
	position: fixed;
	z-index: 9999;
	opacity: 0;
	pointer-events: none;
	transition: 0.25s all cubic-bezier(0.25, 0.46, 0.45, 0.94);

	// Style when hovering over links
	&.is-link {
		border-color: #00ccad;
	}

	// Hide on touch devices
	@media (pointer: coarse) {
		display: none;
	}
}
</style>
