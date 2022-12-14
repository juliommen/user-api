import { Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  handle(request, response): Response {
    const { name, email } = request.body;
    try {
      return response
        .status(201)
        .json(this.createUserUseCase.execute({ email, name }));
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Could not create user. Email has already been taken" });
    }
  }
}

export { CreateUserController };
