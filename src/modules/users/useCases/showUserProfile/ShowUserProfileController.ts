import { Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  handle(request, response): Response {
    const user_id = request.params;
    let user;
    try {
      user = this.showUserProfileUseCase.execute({ user_id });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
    return response.json(user);
  }
}

export { ShowUserProfileController };
