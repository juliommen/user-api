import { Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  handle(request, response): Response {
    const { user_id } = request.headers;
    let users: User[];
    try {
      users = this.listAllUsersUseCase.execute({ user_id });
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }

    return response.json(users);
  }
}

export { ListAllUsersController };
