import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

// Initial render test
test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  expect(screen.getByText("Test the App")).toBeInTheDocument();
});

// Add todo test
test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a new todo");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(addButton);

  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

// Toggle todo completion test
test("toggles todo completion", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");

  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");

  fireEvent.click(todo);
  expect(todo).not.toHaveStyle("text-decoration: line-through");
});

// Delete todo test
test("deletes a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Test the App");
  const deleteButton = todo.nextSibling;

  fireEvent.click(deleteButton);
  expect(todo).not.toBeInTheDocument();
});
