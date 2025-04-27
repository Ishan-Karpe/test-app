<script>
  import { createEventDispatcher } from 'svelte';
  
  // Create a dispatcher to emit events to parent components
  const dispatch = createEventDispatcher();
  
  // Local state for the input field
  let todoText = '';
  
  // Handle form submission
  function handleSubmit() {
    // Don't add empty todos
    if (todoText.trim() === '') return;
    
    // Dispatch the addTodo event with the todo text
    dispatch('addTodo', todoText.trim());
    
    // Clear the input field
    todoText = '';
  }
</script>

<div class="add-todo-form">
  <form on:submit|preventDefault={handleSubmit}>
    <input 
      type="text" 
      bind:value={todoText} 
      placeholder="Add a new todo..."
      aria-label="Add a new todo"
    />
    <button type="submit">Add</button>
  </form>
</div>

<style>
  .add-todo-form {
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    gap: 10px;
  }
  
  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  
  button {
    padding: 10px 15px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #45a049;
  }
</style>
