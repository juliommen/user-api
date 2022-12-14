import { Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  handle(request, response): Response {
    const { user_id } = request.headers;
    try {
      return response.json(this.listAllUsersUseCase.execute({ user_id }));
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
