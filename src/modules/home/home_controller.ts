import { action, configure, makeAutoObservable } from "mobx";
import { homeProvider } from "./home_provider";
import { homeRepository } from "./home_repository";
import { UsersModel } from "./users_model";

export class HomeController {
  isLoading = false;
  users: string | UsersModel[] = [];

  constructor() {
    makeAutoObservable(this, {
      getUsers: action,
      retry: action,
    });
  }

  async getUsers() {
    this.isLoading = true;
    this.users = await homeRepository.getUsers();
    this.isLoading = false;
  }

  *retry() {
    yield this.getUsers();
  }
}

export const homeController = new HomeController();
