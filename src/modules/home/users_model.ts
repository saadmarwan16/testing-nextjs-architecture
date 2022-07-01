// To parse this data:
//
//   import { Convert } from "./file";
//
//   const usersModel = Convert.toUsersModel(json);

export interface UsersModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toUsersModel(json: string): UsersModel[] {
    return JSON.parse(json);
  }

  public static usersModelToJson(value: UsersModel[]): string {
    return JSON.stringify(value);
  }
}
