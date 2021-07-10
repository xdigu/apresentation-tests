import request from "supertest";
import Server from "../src/server";

describe('Tests route "/"', () => {
  it("should request a get with authentication", async () => {
    const { body, status } = await request(Server)
      .get("/")
      .set("Authorization", "bearer 1234");

    expect(status).toBe(200);
    expect(body).toHaveProperty("message", "Hello World!");
  });

  it("should not request without authentication", async () => {
    const { body, status } = await request(Server).get("/");

    expect(status).toBe(401);
    expect(body).toHaveProperty("message", "Unauthorized");
  });

  it("should not request with unauthorized token", async () => {
    const { body, status } = await request(Server)
      .get("/")
      .set("Authorization", "bearer 12345");

    expect(status).toBe(401);
    expect(body).toHaveProperty("message", "Unauthorized");
  });
});
