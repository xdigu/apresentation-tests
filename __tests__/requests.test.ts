import request from "supertest";
import Axios from "axios";

import Server from "../src/server";
import { mockedGetTodo, mockedGetTodos } from "../__mocks__/todoApiResponse";

jest.mock("axios");

const mockedAxios = Axios as jest.Mocked<typeof Axios>;

describe("Test route /requests", () => {
  it("should work", async () => {
    const parsedResponse = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: true,
    };

    mockedAxios.get.mockResolvedValueOnce(mockedGetTodos);
    mockedAxios.get.mockResolvedValueOnce(mockedGetTodo);

    expect(Axios.get).not.toBeCalled();

    const { body: response, status } = await request(Server).get("/requests");

    expect(Axios.get).toBeCalled();

    expect(status).toBe(200);

    expect(response).toHaveProperty("data");
    expect(response.data.todos).toEqual([parsedResponse]);
    expect(response.data.todo).toEqual(parsedResponse);
  });
});
