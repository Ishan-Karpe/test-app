<script>
  import { createEventDispatcher } from 'svelte';
  
  // Create a dispatcher to emit events to parent components
  const dispatch = createEventDispatcher();
  
  // Receive todo object as a prop
  export let todo;
  
  // Handle checkbox change
  function handleToggleComplete() {
    dispatch('toggleComplete', todo.id);
  }
  
  // Handle delete button click
  function handleDelete() {
    dispatch('deleteTodo', todo.id);
  }
</script>

<li class="todo-item">
  <label class:completed={todo.completed}>
    <input 
      type="checkbox" 
      checked={todo.completed} 
      on:change={handleToggleComplete}
    />
    <span class="todo-text">{todo.text}</span>
  </label>
  <button class="delete-btn" on:click={handleDelete} aria-label="Delete todo">
    ×
  </button>
</li>

<style>
  .todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 15px;
    background-color: #f9f9f9;
    border-radius: 4px;
    margin-bottom: 10px;
    transition: background-color 0.2s;
  }
  
  .todo-item:hover {
    background-color: #f1f1f1;
  }
  
  label {
    display: flex;
    align-items: center;
    flex: 1;
    cursor: pointer;
  }
  
  input[type="checkbox"] {
    margin-right: 10px;
  }
  
  .todo-text {
    font-size: 16px;
    transition: color 0.2s;
  }
  
  .completed .todo-text {
    color: #888;
    text-decoration: line-through;
  }
  
  .delete-btn {
    background: none;
    border: none;
    color: #ff5252;
    font-size: 22px;
    cursor: pointer;
    padding: 0 5px;
    transition: color 0.2s;
  }
  
  .delete-btn:hover {
    color: #ff0000;
  }
</style>
