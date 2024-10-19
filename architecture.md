# Project Architecture

## Main Components

### 1. HTML

- [`index.html`](./index.html): The main HTML file containing the structure of the page.

### 2. SCSS

- [`scss/`](./scss/): Directory containing SCSS stylesheets.
  - [`style.scss`](./scss/style.scss): Main stylesheet file.
  - [`variables.scss`](./scss/variables.scss): Contains theme colors and variables.
  - [`medium-posts.scss`](./scss/medium-posts.scss): Contains styles for the Medium posts section.
  - [`icons.scss`](./scss/icons.scss): Contains icon styles.
  - [`dynamic-blobs.scss`](./scss/dynamic-blobs.scss): Contains styles for dynamic gradient blobs on the page.
  - [`theme-switch.scss`](./scss/theme-switch.scss): Contains styles for the theme switcher.
  - [`project-cards.scss`](./scss/project-cards.scss): Contains styles for project cards.

### 3. JavaScript

- [`js/`](./js/): Directory containing JavaScript files.
  - [`main.js`](./js/main.js): Main JavaScript file handling interactivity, theme preference, and event listeners for user interactions.

### 4. Images and Icons

- [`images/`](./images/): Directory containing image assets.
- [`assets/`](./assets/): Directory containing favicon and other icons.

## Tools and Technologies

- **[Vite](https://vitejs.dev/)**: Used for project build and development.
- **[Bun](https://bun.sh/)**: Used as the JavaScript runtime.
- **[SCSS](https://sass-lang.com/)**: Used for styling.

## Vite Plugins

- [`vite-plugin-live-reload`](https://github.com/arnoson/vite-plugin-live-reload): Used for live reloading of the project.
- [`vite-plugin-browser-sync`](https://github.com/Applelo/vite-plugin-browser-sync): Used for live browser sync.
- [`vite-plugin-compression2`](https://github.com/nonzzz/vite-plugin-compression): Used for compression of assets.
- [`vite-plugin-html`](https://github.com/vbenjs/vite-plugin-html): Used for HTML template processing.
