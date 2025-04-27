import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import TodoItem from '../lib/TodoItem.svelte';

describe('TodoItem', () => {
  // Sample todo for testing
  const sampleTodo = {
    id: 1,
    text: 'Test todo',
    completed: false
  };
  
  // Test for rendering the component
  it('renders correctly with todo data', () => {
    const { getByText, getByRole } = render(TodoItem, { props: { todo: sampleTodo } });
    
    // Check if the todo text is displayed
    expect(getByText('Test todo')).toBeTruthy();
    
    // Check if the checkbox exists and is not checked
    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeTruthy();
    expect(checkbox.checked).toBe(false);
    
    // Check if the delete button exists
    expect(getByText('×')).toBeTruthy();
  });
  
  // Test for toggling completion
  it('emits toggleComplete event when checkbox is clicked', async () => {
    const { component, getByRole } = render(TodoItem, { props: { todo: sampleTodo } });
    
    // Mock the event dispatcher
    const mockDispatch = vi.fn();
    component.$on('toggleComplete', mockDispatch);
    
    // Click the checkbox
    const checkbox = getByRole('checkbox');
    await fireEvent.click(checkbox);
    
    // Check if the event was dispatched with the correct id
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch.mock.calls[0][0].detail).toBe(1);
  });
  
  // Test for deleting a todo
  it('emits deleteTodo event when delete button is clicked', async () => {
    const { component, getByText } = render(TodoItem, { props: { todo: sampleTodo } });
    
    // Mock the event dispatcher
    const mockDispatch = vi.fn();
    component.$on('deleteTodo', mockDispatch);
    
    // Click the delete button
    const deleteButton = getByText('×');
    await fireEvent.click(deleteButton);
    
    // Check if the event was dispatched with the correct id
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch.mock.calls[0][0].detail).toBe(1);
  });
  
  // Test for completed todo styling
  it('applies completed styling when todo is completed', () => {
    const completedTodo = { ...sampleTodo, completed: true };
    const { getByText, getByRole } = render(TodoItem, { props: { todo: completedTodo } });
    
    // Check if the checkbox is checked
    const checkbox = getByRole('checkbox');
    expect(checkbox.checked).toBe(true);
    
    // Check if the text has the completed class
    const label = getByText('Test todo').closest('label');
    expect(label.classList.contains('completed')).toBe(true);
  });
});
