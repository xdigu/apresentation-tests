import { mockAxiosResponse } from "./mockAxiosResponse";

const data = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
};

export const mockedGetTodo = mockAxiosResponse(data);

export const mockedGetTodos = mockAxiosResponse([data]);
