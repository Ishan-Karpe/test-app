# Task List: Simple Svelte Todo App

## Core Implementation

*   [x] **Setup Project Structure & Memory Bank - (2025-04-27)**
    *   [x] Initialize Vite/Svelte project.
    *   [x] Create Memory Bank files (`memory-bank/`) with initial content.
    *   [x] Create `PLANNING.md` and `TASK.md`.
*   [x] **Implement Core Components**
    *   [x] Create `src/App.svelte` structure.
    *   [x] Create `src/lib/AddTodoForm.svelte` structure.
    *   [x] Create `src/lib/TodoList.svelte` structure.
    *   [x] Create `src/lib/TodoItem.svelte` structure.
*   [x] **Implement Add Todo Functionality**
    *   [x] Handle form submission in `AddTodoForm.svelte`.
    *   [x] Emit `addTodo` event with text.
    *   [x] Update `todos` state in `App.svelte`.
*   [x] **Implement View Todos Functionality**
    *   [x] Pass `todos` prop from `App` to `TodoList`.
    *   [x] Iterate and render `TodoItem` components in `TodoList`.
    *   [x] Pass `todo` prop to `TodoItem`.
    *   [x] Display todo text in `TodoItem`.
*   [x] **Implement Toggle Completion Functionality**
    *   [x] Add checkbox to `TodoItem`.
    *   [x] Bind checkbox state to `todo.completed`.
    *   [x] Emit `toggleComplete` event with `id` on change.
    *   [x] Handle event in `App.svelte` and update the specific todo's `completed` status.
*   [x] **Implement Delete Todo Functionality**
    *   [x] Add delete button to `TodoItem`.
    *   [x] Emit `deleteTodo` event with `id` on click.
    *   [x] Handle event in `App.svelte` and remove the todo from the `todos` array.
*   [x] **Implement localStorage Persistence**
    *   [x] Load `todos` from `localStorage` in `App.svelte` on mount.
    *   [x] Save `todos` to `localStorage` whenever the array changes in `App.svelte`.
*   [x] **Add Basic Styling**
    *   [x] Apply simple CSS for layout and appearance.

## Testing

*   [x] **Setup Testing Framework (Vitest)**
    *   [x] Install Vitest and necessary dependencies.
    *   [x] Configure Vitest.
    *   [x] Create basic component tests.

## Discovered During Work

*   [x] Added component tests for better test coverage.
