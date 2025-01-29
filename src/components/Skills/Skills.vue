<script setup lang="ts">
import DesignSection from './Sections/DesignSection.vue'
import ProgrammingSection from './Sections/ProgrammingSection.vue'
import ToolsSection from './Sections/ToolsSection.vue'

import Icon from '../Other/Icon.vue'
</script>

<template>
	<div class="skills">
		<div class="section programming" aria-labelledby="programming-skills-title">
			<h2 id="programming-skills-title"><Icon name="code" /> Programming</h2>

			<ProgrammingSection />
		</div>

		<div class="section design" aria-labelledby="design-skills-title">
			<h2 id="design-skills-title"><Icon name="palette" /> Design</h2>

			<DesignSection />
		</div>

		<div class="section tools" aria-labelledby="tools-skills-title">
			<h2 id="tools-skills-title"><Icon name="tools" /> Tools</h2>

			<ToolsSection />
		</div>

		<!-- <div class="hosting">
					<h2>Other</h2>

					<div class="skills-list">
						<a href="https://vercel.com/" target="_blank">
							<img
								src="https://skillicons.dev/icons?i=vercel"
								alt="vercel logo"
								width="45"
								height="45"
							/>
						</a>
						<a href="https://cloud.google.com/" target="_blank">
							<img
								src="https://skillicons.dev/icons?i=gcp"
								alt="Google Cloud logo"
								width="45"
								height="45"
							/>
						</a>
						<a href="https://azure.microsoft.com/" target="_blank">
							<img
								src="https://skillicons.dev/icons?i=azure"
								alt="Azure logo"
								width="45"
								height="45"
							/>
						</a>
						<a href="https://www.digitalocean.com/" target="_blank">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg"
								alt="digitalocean logo"
								width="45"
								height="45"
							/>
						</a>
						<a href="https://git-scm.com/" target="_blank"
							><img src="https://skillicons.dev/icons?i=git" alt="git logo" width="45" height="45"
						/></a>
						<a href="https://wikipedia.org/wiki/Linux" target="_blank"
							><img
								src="https://skillicons.dev/icons?i=linux"
								alt="linux logo"
								width="45"
								height="45"
						/></a>
						<a href="https://ubuntu.com/" target="_blank"
							><img
								src="https://skillicons.dev/icons?i=ubuntu"
								alt="ubuntu logo"
								width="45"
								height="45"
						/></a>
					</div>
				</div> -->
	</div>
</template>
