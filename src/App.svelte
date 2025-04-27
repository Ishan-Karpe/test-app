<script>
  import { onMount } from 'svelte';
  import AddTodoForm from './lib/AddTodoForm.svelte';
  import TodoList from './lib/TodoList.svelte';

  // The main array holding all todo items.
  // Each todo: { id: number, text: string, completed: boolean }
  let todos = [];

  // On component mount, load todos from localStorage if available.
  onMount(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      todos = JSON.parse(storedTodos);
    }
  });

  // Whenever 'todos' changes, save the updated array to localStorage.
  $: {
    if (todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  // Handler for adding a new todo.
  // Receives the todo text from AddTodoForm, creates a new todo object, and adds it to the array.
  function handleAddTodo(event) {
    const text = event.detail;
    const newTodo = {
      id: Date.now(), // Use timestamp as a simple unique ID
      text,
      completed: false
    };
    todos = [...todos, newTodo];
  }

  // Handler for toggling a todo's completion status.
  // Finds the todo by id and toggles its 'completed' property.
  function handleToggleComplete(event) {
    const id = event.detail;
    todos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
  }

  // Handler for deleting a todo.
  // Removes the todo with the given id from the array.
  function handleDeleteTodo(event) {
    const id = event.detail;
    todos = todos.filter(todo => todo.id !== id);
  }
</script>

<main>
  <div class="container">
    <h1>Svelte Todo App</h1>

    <!-- Form for adding new todos -->
    <AddTodoForm on:addTodo={handleAddTodo} />

    <!-- List of todos, with handlers for toggling and deleting -->
    <TodoList
      todos={todos}
      on:toggleComplete={handleToggleComplete}
      on:deleteTodo={handleDeleteTodo}
    />
  </div>
</main>

<style>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }

  h1 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }
</style>