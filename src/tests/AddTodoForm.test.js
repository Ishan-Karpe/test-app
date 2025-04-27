import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import AddTodoForm from '../lib/AddTodoForm.svelte';

describe('AddTodoForm', () => {
  // Test for rendering the component
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(AddTodoForm);
    
    // Check if input and button exist
    expect(getByPlaceholderText('Add a new todo...')).toBeTruthy();
    expect(getByText('Add')).toBeTruthy();
  });
  
  // Test for adding a todo
  it('emits addTodo event when form is submitted with text', async () => {
    const { component, getByPlaceholderText, getByText } = render(AddTodoForm);
    
    // Mock the event dispatcher
    const mockDispatch = vi.fn();
    component.$on('addTodo', mockDispatch);
    
    // Type in the input
    const input = getByPlaceholderText('Add a new todo...');
    await fireEvent.input(input, { target: { value: 'Test todo' } });
    
    // Submit the form
    const button = getByText('Add');
    await fireEvent.click(button);
    
    // Check if the event was dispatched with the correct text
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch.mock.calls[0][0].detail).toBe('Test todo');
    
    // Check if the input was cleared
    expect(input.value).toBe('');
  });
  
  // Test for not adding empty todos
  it('does not emit addTodo event when form is submitted with empty text', async () => {
    const { component, getByText } = render(AddTodoForm);
    
    // Mock the event dispatcher
    const mockDispatch = vi.fn();
    component.$on('addTodo', mockDispatch);
    
    // Submit the form without typing anything
    const button = getByText('Add');
    await fireEvent.click(button);
    
    // Check that the event was not dispatched
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
