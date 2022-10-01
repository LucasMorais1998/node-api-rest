import { Request, Response } from "express";

class PersonController {
  public async index(req: Request, res: Response) {
    res.json({ message: "Ok" });
  }
}

export default new PersonController();
