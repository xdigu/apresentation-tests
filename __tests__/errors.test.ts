import request from "supertest";
import Server from "../src/server";

describe('Tests route "/errors"', () => {
  it("should return an error", async () => {
    const { body, status } = await request(Server).get("/errors");

    expect(status).toBe(500);
    expect(body).toHaveProperty("message", "A server error ocurred");
  });
});
