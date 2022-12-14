import { Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  handle(request, response): Response {
    const { user_id } = request.params;
    try {
      return response.json(this.showUserProfileUseCase.execute({ user_id }));
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { ShowUserProfileController };
