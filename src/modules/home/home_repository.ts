import { homeProvider } from "./home_provider";
import { UsersModel } from "./users_model";

export class HomeRepository {
  async getUsers(): Promise<string | UsersModel[]> {
    try {
      return await homeProvider.getUsers();
    } catch (error: any) {
      return error.message ?? "An error occurred";
    }
  }
}

export const homeRepository = new HomeRepository();
