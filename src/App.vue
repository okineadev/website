<script setup lang="ts">
import { ref } from 'vue'

import ThemeSwitch from './components/ThemeSwitch.vue'
import Profile from './components/Profile.vue'
import Project from './components/Project.vue'
import Skills from './components/Skills/Skills.vue'
import Socials from './components/Socials/Socials.vue'
import MediumPosts from './components/Medium/MediumPosts.vue'
import Footer from './components/Footer.vue'

import myProjects from './projects'

const projects = ref(myProjects)
</script>

<template>
	<ThemeSwitch />
	<div class="background-gradient" aria-hidden="true"></div>

	<!-- Decorative elements -->
	<picture id="rock" aria-hidden="true">
		<source srcset="./images/rock.webp" type="image/webp" fetchpriority="high" />
		<source srcset="./images/rock.png" type="image/png" fetchpriority="high" />
		<img src="./images/rock.png" fetchpriority="high" />
	</picture>

	<div id="dots" aria-hidden="true"></div>
	<!------------------------->

	<div class="content">
		<!-- Info about me -->
		<Profile></Profile>

		<h1 class="center" id="projects"><i class="icon table"></i> My projects</h1>

		<div id="my-projects">
			<p>List of my best projects</p>

			<!-- List of projects -->
			<div class="projects-list">
				<Project v-for="(project, index) in projects" :key="index" :project="project"></Project>
			</div>
		</div>

		<h1 class="center skills-title" id="skills"><i class="icon bolt"></i> Skills</h1>

		<Skills />

		<h1 class="center" id="socials"><i class="icon globe" aria-hidden="true"></i> Socials</h1>

		<Socials />

		<h1 class="center" id="medium-posts-title">
			<i class="icon newspaper" aria-hidden="true"></i>
			My posts on
			<img src="./images/medium.svg" class="medium-logo" alt="Medium" height="34" />
		</h1>

		<MediumPosts />
	</div>

	<Footer />

</template>
