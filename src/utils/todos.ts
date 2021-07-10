interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function completeTodo(todo: Todo): Todo {
  return {
    id: todo.id,
    completed: true,
    title: todo.title,
    userId: todo.userId,
  };
}
