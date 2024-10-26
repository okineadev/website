# Project Architecture

## Main Components

### 1. HTML

- [`src/`](src/)
  - [`index.html`](src/index.html): The main HTML file containing the structure of the page.

### 2. SCSS

- [`src/`](src/)
  - [`scss/`](src/scss/): Directory containing SCSS stylesheets.
    - [`style.scss`](src/scss/style.scss): Main stylesheet file.
    - [`variables.scss`](src/scss/variables.scss): Contains theme colors and variables.
    - [`medium-posts.scss`](src/scss/medium-posts.scss): Contains styles for the Medium posts section.
    - [`icons.scss`](src/scss/icons.scss): Contains icon styles.
    - [`dynamic-blobs.scss`](src/scss/dynamic-blobs.scss): Contains styles for dynamic gradient blobs on the page.
    - [`theme-switch.scss`](src/scss/theme-switch.scss): Contains styles for the theme switcher.
    - [`project-cards.scss`](src/scss/project-cards.scss): Contains styles for project cards.

### 3. JavaScript

- [`src/`](src/)

  - [`js/`](src/js/): Directory containing JavaScript files.
    - [`main.js`](src/js/main.js): Main JavaScript file handling interactivity, theme preference, and event listeners for user interactions.

- [`vite.config.js`](vite.config.js): [Vite configuration file](https://vitejs.dev/config/) containing plugins and settings.
- [`svgo.config.js`](svgo.config.js): [SVGO](https://svgo.dev) configuration file for.

### 4. Images and Icons

- [`src/`](src/)
  - [`images/`](src/images/): Directory containing image assets.
  - [`assets/`](src/assets/): Directory containing favicon and other icons.

### 5. Other

- [`NOTES.md`](NOTES.md): Notes and thanks to the authors of the photos I use.
- [`.prettierrc`](.prettierrc): Prettier configuration file.

## Tools and Technologies

- **[Vite](https://vitejs.dev/)**: Used for project build and development.
- **[Bun](https://bun.sh/)**: Used as the JavaScript runtime.
- **[SCSS](https://sass-lang.com/)**: Used for styling.

## Vite Plugins

- [`vite-plugin-live-reload`](https://github.com/arnoson/vite-plugin-live-reload): Used for live reloading of the project.
- [`vite-plugin-compression2`](https://github.com/nonzzz/vite-plugin-compression): Used for compression of assets.
- [`vite-plugin-html`](https://github.com/vbenjs/vite-plugin-html): Used for HTML template processing.
- [`vite-plugin-sitemap`](https://github.com/jbaubree/vite-plugin-sitemap): Used for generating sitemap.
