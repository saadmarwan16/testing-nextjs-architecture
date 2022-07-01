import { action, makeAutoObservable } from "mobx";
import { UserDetailsModel } from "./user_details_model";
import { userDetailsProvider } from "./user_details_provider";

export class UserDetailsController {
  isLoading = false;
  isError = false;
  errorText = "";
  user: UserDetailsModel | null = null;

  constructor() {
    makeAutoObservable(this, {
      getUser: action,
      retry: action,
    });
  }

  async getUser(userId: string) {
    try {
      this.isLoading = true;
      this.user = await userDetailsProvider.getUserDetails(userId)
      this.isLoading = false;
    } catch (error: any) {
      this.isError = true;
      this.errorText = error.message ?? "An error occured";
    }
  }

  async retry() {
    this.isError = false;
    // await this.getUser();
  }
}

export const userDetailsController = new UserDetailsController();
