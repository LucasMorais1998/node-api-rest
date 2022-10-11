import { test } from "@japa/runner";
import supertest from "supertest";

const BASE_URL = `http://localhost:${process.env.PORT}/`;

test.group("Person", () => {
  test("It should return Ok message", async ({ expect }) => {
    try {
      const response = await supertest(BASE_URL)
        .get("/person")
        .send()
        .expect(200);

      const message = response.body.message;

      expect(message).toEqual("Ok");
    } catch (err) {
      console.error(err);
    }
  });
});
