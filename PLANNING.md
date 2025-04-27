# PLANNING: Simple Svelte Todo App

## Project Goal

Create a simple, functional, single-page Todo application using Svelte and JavaScript. The app should allow users to add, view, mark as complete, and delete tasks, with data persisted locally using `localStorage`.

## Architecture Overview

*   **Type:** Single Page Application (SPA)
*   **Pattern:** Component-Based
*   **Core Components:**
    *   `App.svelte` (Main container, state management)
    *   `AddTodoForm.svelte` (Input for new todos)
    *   `TodoList.svelte` (Renders the list)
    *   `TodoItem.svelte` (Displays individual todo, handles actions)
*   **Data Flow:** Unidirectional (Props down, Events up). State managed in `App.svelte`.

## Technology Stack

*   **Framework:** Svelte
*   **Language:** JavaScript (ES6+)
*   **Build Tool:** Vite
*   **Styling:** Plain CSS
*   **Persistence:** Browser `localStorage`
*   **Testing:** Vitest

## Style Guide & Conventions

*   Follow standard Svelte/JavaScript best practices.
*   Adhere to rules defined in `.clinerules` (e.g., file size limits, modularity).
*   Use clear variable and function names.
*   Comment non-obvious code sections.

## Constraints

*   No backend server required.
*   Must run entirely in the browser.
*   Keep components focused and maintainable.
