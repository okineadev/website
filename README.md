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

   > [!IMPORTANT]
   > This project uses the **Bun** runtime, if you haven't installed it, install it using this command:

   ```plaintext
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
- `vite-plugin-browser-sync`
- `vite-plugin-compression2`
- `vite-plugin-html`
- `vite-plugin-live-reload`
- `vite-plugin-pwa`

## 📚 Project Structure

- [`index.html`](./index.html): The main HTML file.
- [`vite.config.js`](./vite.config.js): Configuration file for Vite.
- [`package.json`](./package.json): Project metadata and dependencies.
- [`scss/`](./scss/): Directory containing SCSS stylesheets.
- [`images/`](./images/): Directory containing image assets.
- [`js/`](./js/): Directory containing JavaScript files:
  - [`main.js`](./js/main.js): Main JavaScript file handling interactivity and theme preference.
- [`assets/`](./assets/): Directory containing favicon and other icons.

---

Feel free to explore, contribute, and provide feedback!

Happy coding! 😄
