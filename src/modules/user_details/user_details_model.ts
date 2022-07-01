// To parse this data:
//
//   import { Convert, UserDetailsModel } from "./file";
//
//   const userDetailsModel = Convert.toUserDetailsModel(json);

export interface UserDetailsModel {
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
  public static toUserDetailsModel(json: string): UserDetailsModel {
    return JSON.parse(json);
  }

  public static userDetailsModelToJson(value: UserDetailsModel): string {
    return JSON.stringify(value);
  }
}
