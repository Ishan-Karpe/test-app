# System Patterns: Simple Svelte Todo App

## Architecture

*   **Type:** Single Page Application (SPA)
*   **Pattern:** Component-Based Architecture

## Core Components

1.  **`App.svelte`:**
    *   Role: Main application container. Root of the component tree.
    *   Responsibilities: Manages the global state (the `todos` array), handles core logic for adding, deleting, and toggling todos, renders child components (`AddTodoForm`, `TodoList`).
    *   State: `todos: { id: number, text: string, completed: boolean }[]`

2.  **`AddTodoForm.svelte`:**
    *   Role: Input form for creating new todos.
    *   Responsibilities: Captures user input, emits an `addTodo` event upon submission.
    *   State: Local state for the input field value.
    *   Events: Emits `addTodo` (payload: `string`).

3.  **`TodoList.svelte`:**
    *   Role: Renders the list of todo items.
    *   Responsibilities: Receives the `todos` array via props, iterates using `#each`, renders `TodoItem` for each todo, forwards events from `TodoItem` up to `App`.
    *   Props: `todos` array.
    *   Events: Forwards `toggleComplete` and `deleteTodo`.

4.  **`TodoItem.svelte`:**
    *   Role: Displays a single todo item and its controls.
    *   Responsibilities: Renders todo text, checkbox for completion status, delete button. Emits events for user actions.
    *   Props: `todo` object.
    *   Events: Emits `toggleComplete` (payload: `id`), `deleteTodo` (payload: `id`).

## Data Flow

*   **Unidirectional:** State (`todos` array) is held in `App.svelte`.
*   Data flows down from `App` -> `TodoList` -> `TodoItem` via props.
*   Actions flow up from `TodoItem` -> `TodoList` -> `App` via dispatched events. `AddTodoForm` also emits events directly to `App`.
*   `App.svelte` modifies the state based on received events, triggering reactive updates down the component tree.

## State Management

*   Primarily managed within `App.svelte`.
*   Leverages Svelte's built-in reactivity for UI updates when the `todos` array changes.
*   No external state management library needed for this scope.

## Persistence

*   The `todos` array in `App.svelte` will be synchronized with `localStorage`.
    *   Load from `localStorage` on component initialization (`onMount`).
    *   Save to `localStorage` whenever the `todos` array is modified (using Svelte's reactive `$:` block or explicit function calls after state updates).
