import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';
import '@testing-library/jest-dom';

test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

test('can add a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/Add new todo/i), {
    target: { value: 'Test Todo' },
  });
  fireEvent.click(screen.getByText(/Add/i));
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});

test('can toggle todo completion', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React');
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');
});

test('can delete a todo', () => {
  render(<TodoList />);
  const deleteBtn = screen.getAllByText('Delete')[0];
  fireEvent.click(deleteBtn);
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
