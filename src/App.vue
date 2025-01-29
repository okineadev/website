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

import Icon from './components/Other/Icon.vue'

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

		<h1 class="center" id="projects"><Icon name="table" /> My projects</h1>

		<div id="my-projects">
			<p>List of my best projects</p>

			<!-- List of projects -->
			<div class="projects-list">
				<Project v-for="(project, index) in projects" :key="index" :project="project"></Project>
			</div>
		</div>

		<h1 class="center skills-title" id="skills"><Icon name="bolt" /> Skills</h1>

		<Skills />

		<h1 class="center" id="socials"><Icon name="globe" /> Socials</h1>

		<Socials />

		<Code class="center">npx okineadev</Code>

		<h1 class="center" id="medium-posts-title">
			<Icon name="newspaper" /> My posts on
			<img src="./assets/images/medium.svg?url" class="medium-logo" alt="Medium" height="34" />
		</h1>

		<MediumPosts />
	</div>

	<Footer />
</template>
