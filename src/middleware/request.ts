import { Request, Response } from "express";

import { todoClient } from "../clients";
import completeTodo from "../utils/todos";

export default async function Request(req: Request, res: Response) {
  const [{ data: todos }, { data: todo }] = await Promise.all([
    todoClient.getTodos(),
    todoClient.getTodo(1),
  ]);

  const completedTodo = completeTodo(todo);

  const completedTodos = todos.map(completeTodo);

  return res.json({ data: { todos: completedTodos, todo: completedTodo } });
}
