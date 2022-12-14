import { Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  handle(request, response): Response {
    const user_id = request.params;
    try {
      this.turnUserAdminUseCase.execute({ user_id });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
    return response.status(201).send();
  }
}

export { TurnUserAdminController };
