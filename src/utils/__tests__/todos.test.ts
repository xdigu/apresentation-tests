import completeTodo from "../todos";

describe("Todos tests", () => {
  it("Should complete a todo", () => {
    const mockedTodo = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    };

    const mockedExpectedTodo = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: true,
    };

    const completedTodo = completeTodo(mockedTodo);

    expect(completedTodo).toEqual(mockedExpectedTodo);
  });
});
