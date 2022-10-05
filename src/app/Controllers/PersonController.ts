import { Request, Response } from "express";

class PersonController {
  public async index(request: Request, response: Response) {
    response.send({ message: "Ok" });
  }
}

export default new PersonController();
