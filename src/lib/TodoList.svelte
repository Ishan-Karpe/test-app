<script>
  import TodoItem from './TodoItem.svelte';
  import { createEventDispatcher } from 'svelte';
  
  // Create a dispatcher to forward events to parent components
  const dispatch = createEventDispatcher();
  
  // Receive todos array as a prop
  export let todos = [];
  
  // Forward events from TodoItem to App
  function handleToggleComplete(event) {
    dispatch('toggleComplete', event.detail);
  }
  
  function handleDeleteTodo(event) {
    dispatch('deleteTodo', event.detail);
  }
</script>

<div class="todo-list">
  {#if todos.length === 0}
    <p class="empty-message">No todos yet. Add one above!</p>
  {:else}
    <ul>
      {#each todos as todo (todo.id)}
        <TodoItem 
          {todo} 
          on:toggleComplete={handleToggleComplete} 
          on:deleteTodo={handleDeleteTodo} 
        />
      {/each}
    </ul>
  {/if}
</div>

<style>
  .todo-list {
    margin-top: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .empty-message {
    text-align: center;
    color: #888;
    font-style: italic;
    padding: 20px 0;
  }
</style>
