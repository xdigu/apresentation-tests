import request from "supertest";
import Server from "../src/server";

describe('Tests route "/users"', () => {
  it("should request a user", async () => {
    const { body, status } = await request(Server)
      .get("/users")
      .query({ name: "Rodrigo", lastName: "Jorge" });

    expect(status).toBe(200);
    expect(body).toHaveProperty("data");
    expect(body.data).toHaveProperty("fullName", "Rodrigo Jorge");
  });

  it("should get an error if not pass name", async () => {
    const { body, status } = await request(Server)
      .get("/users")
      .query({ lastName: "Jorge" });

    expect(status).toBe(400);
    expect(body).toHaveProperty("message");
  });
});
