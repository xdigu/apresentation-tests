import Axios from "axios";

interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const getTodos = () => {
  return Axios.get<TodoResponse[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );
};

export const getTodo = (todoId: number) => {
  return Axios.get<TodoResponse>(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
};
