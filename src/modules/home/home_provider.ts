import { Convert } from "./users_model";

export class HomeProvider {
  async getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Server Error");
    }

    const results = await response.text()
    return Convert.toUsersModel(results);
  }
}

export const homeProvider = new HomeProvider();
