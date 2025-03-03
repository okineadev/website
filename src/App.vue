<script setup lang="ts">
import { ref } from 'vue'

import ThemeSwitch from './components/ThemeSwitch.vue'
import Profile from './components/Profile.vue'
import Project from './components/Project.vue'
import Skills from './components/Skills/Skills.vue'
import Socials from './components/Socials/Socials.vue'
import Code from './components/Code.vue'
import MediumPosts from './components/Medium/MediumPosts.vue'
import Footer from './components/Footer.vue'
import ProgressiveBlur from './components/ProgressiveBlur™.vue'

import myProjects from './projects'

const projects = ref(myProjects)
</script>

<template>
	<ThemeSwitch />
	<div class="background-gradient" aria-hidden="true"></div>

	<!-- Decorative elements -->
	<picture id="rock" aria-hidden="true">
		<source srcset="./assets/images/rock.webp" type="image/webp" fetchpriority="high" />
		<source srcset="./assets/images/rock.png" type="image/png" fetchpriority="high" />
		<img src="./assets/images/rock.png" fetchpriority="high" />
	</picture>

	<div id="dots" aria-hidden="true"></div>
	<!------------------------->

	<div class="content">
		<!-- Info about me -->
		<Profile></Profile>

		<h1 class="center" id="projects"><i-lucide-table-2 /> My projects</h1>

		<div id="my-projects">
			<p>List of my best projects</p>

			<!-- List of projects -->
			<div class="projects-list">
				<Project v-for="(project, index) in projects" :key="index" :project="project"></Project>
			</div>
		</div>

		<h1 class="center skills-title" id="skills"><i-lucide-zap /> Skills</h1>

		<Skills />

		<h1 class="center" id="socials"><i-lucide-globe /> Socials</h1>

		<Socials />

		<Code class="center">curl -L okinea.dev</Code>

		<h1 class="center" id="medium-posts-title">
			<i-lucide-newspaper /> My posts on
			<img src="./assets/images/medium.svg?url" class="medium-logo" alt="Medium" height="34" />
		</h1>

		<MediumPosts />
	</div>

	<Footer />

	<ProgressiveBlur :blurHeight="70" />
</template>

<style lang="scss">
.content {
	margin-left: auto;
	margin-right: auto;

	width: clamp(85%, 85%, 85%);
	position: relative;

	margin-top: 30px;

	display: flex;
	flex-direction: column;
	gap: 50px;

	z-index: 1;

	// 🎬 https://youtu.be/0TnO1GzKWPc
	@media (prefers-reduced-motion: no-preference) {
		& > * {
			animation: appear ease-in-out;
			animation-timeline: view();
			animation-range: entry 0% cover 180px;
		}
	}
}

// Magic pattern styles
#dots {
	width: 700px;
	height: 700px;

	mask-size: cover;
	mask-image: url('./assets/images/dots.svg');

	background-color: var(--dots-color);
	position: absolute;
	z-index: -1;

	left: calc(((100% - 70rem) / 2) - 40px);
	top: -80px;

	object-position: left;

	@media (prefers-reduced-motion: no-preference) {
		animation: fade 1s ease-out forwards;
	}
}

#rock {
	position: absolute;
	width: 120px;

	top: -42px;
	left: -46px;
	opacity: 0.9;

	img {
		width: inherit;
	}
}

// Background gradient styles
.background-gradient {
	background: linear-gradient(135deg, rgba(0, 208, 255, 0.4), rgba(0, 255, 255, 0.3), rgba(0, 128, 128, 0.3));

	width: 400px;
	height: 300px;

	border-radius: 100%;
	z-index: -2;
	position: absolute;

	top: 420px;
	left: -385px;

	transform: rotate(90deg);
	filter: blur(100px);

	@media (prefers-reduced-motion: no-preference) {
		animation: showGradient 1s ease-out forwards;
	}

	@media (prefers-reduced-motion: reduce) {
		left: -385px;
	}
}

// Medium logo styles
.medium-logo {
	background-color: var(--medium-logo-background-color);
	padding: 5px;
}

#my-projects > p {
	margin-top: 0;
}

// Projects styles
.projects-list {
	display: flex;
	flex-wrap: wrap;

	gap: 10px;
	margin-bottom: 10px;
	align-items: flex-start;
}
</style>
