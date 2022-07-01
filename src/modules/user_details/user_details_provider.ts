import { Convert } from "./user_details_model";

export class UserDetailsProvider {
  async getUserDetails(userId: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      throw new Error();
    }

    const results = await response.text();
    return Convert.toUserDetailsModel(results);
  }
}

export const userDetailsProvider = new UserDetailsProvider();
