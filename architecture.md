# Project Architecture

## Main Components

### 1. Configurations

- [`vite.config.js`](vite.config.js): [Vite configuration file](https://vite.dev/config) containing plugins and settings.
- [`svgo.config.js`](svgo.config.js): [SVGO](https://svgo.dev) configuration file

### 2. Images and Icons

- [`src/`](src/)
  - [`images/`](src/images/): Directory containing image assets.
  - [`assets/`](src/assets/): Directory containing favicon and other icons.

### 3. Other

- [`NOTES.md`](NOTES.md): Notes and thanks to the authors of the photos I use.
- [`.prettierrc`](.prettierrc): Prettier configuration file.

## Tools and Technologies

- **[Vite](https://vite.dev)**: Used for project build and development.
- **[Bun](https://bun.sh)**: Used as the JavaScript runtime.
- **[SCSS](https://sass-lang.com)**: Used for styling.
