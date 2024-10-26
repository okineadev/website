# okienadev-website

Welcome to the repository for my personal website, built with [**Vite**](https://vite.dev/) and various plugins.

## 🚀 Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/okineadev/okineadev-website.git --depth=1
   cd okineadev-website
   ```

2. **Install dependencies:**

   > **📝 Important**: This project uses the **Bun** runtime, if you haven't installed it, install it using this command:

   ```bash
   # Linux / macOS
   curl -fsSL https://bun.sh/install | bash

   # Windows (PowerShell)
   powershell -c "irm bun.sh/install.ps1 | iex"
   ```

   **Verify the installation:**

   ```bash
   bun --version
   ```

   For more information, visit the [Bun documentation](https://bun.sh/docs).

   ***

   Next, install the project dependencies:

   ```bash
   bun install
   ```

3. **Run the development server:**

   ```sh
   bun run dev
   ```

4. **Build the project for production:**

   ```sh
   bun run build
   ```

5. **Preview the production build:**

   ```bash
   bun run preview
   ```

## 📦 Dependencies

This project uses the following main dependencies:

- `vite`
- `sass`
- `vite-plugin-compression2`
- `vite-plugin-html`
- `vite-plugin-live-reload`
- `vite-plugin-sitemap`

## 📚 Project Structure

- [`src/`](src/): Directory containing the source code.
  - [`index.html`](src/index.html): The main HTML file.
  - [`scss/`](src/scss/): Directory containing SCSS stylesheets.
  - [`images/`](src/images/): Directory containing image assets.
  - [`js/`](src/js/): Directory containing JavaScript files:
    - [`main.js`](src/js/main.js): Main JavaScript file handling interactivity and theme preference.
  - [`assets/`](src/assets/): Directory containing favicon and other icons.
- [`.prettierrc`](.prettierrc): Prettier configuration file.
- [`architecture.md`](architecture.md): Document describing the project's architecture.
- [`bunfig.toml`](bunfig.toml): Bun runtime configuration file.
- [`NOTES.md`](NOTES.md): Document containing notes and credits.
- [`svgo.config.js`](svgo.config.js): [SVGO](https://svgo.dev) configuration file.
- [`vite.config.js`](vite.config.js): [Vite configuration file](https://vitejs.dev/config/).

---

Feel free to explore, contribute, and provide feedback!

Happy coding! 😄
