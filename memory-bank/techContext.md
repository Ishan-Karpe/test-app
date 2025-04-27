# Technical Context: Simple Svelte Todo App

## Core Technologies

*   **Framework:** Svelte (using SvelteKit or a standard Svelte template)
*   **Language:** JavaScript (ES6+)
*   **Build Tool:** Vite
*   **Styling:** Plain CSS (initially). May consider utility classes (e.g., Tailwind CSS) if complexity increases.
*   **State Management:** Svelte's built-in reactivity and stores. Start with component props and event dispatching.
*   **Local Persistence:** Browser `localStorage` API.
*   **Testing:** Vitest (preferred) or Jest for unit/component testing.

## Development Setup

*   Node.js and npm/yarn required.
*   Standard Svelte project initialization (`npm create vite@latest` or similar).
*   Development server via `npm run dev`.

## Technical Constraints

*   Keep components focused and ideally under 500 lines (as per `.clinerules`).
*   Rely only on browser APIs for storage (no backend initially).
*   Ensure code follows standard JavaScript and Svelte best practices.
