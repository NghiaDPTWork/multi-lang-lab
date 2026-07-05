import type { AuthResponse, User, userLogin, userRegister } from "./types";

export const UserService = {
  async login(_credentials: userLogin): Promise<AuthResponse> {
    // TODO: Implement login API call
    throw new Error("Not implemented");
  },
};
