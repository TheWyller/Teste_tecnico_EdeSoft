export interface UserModel {
  id?: number;
  email: string;
  username: string;
  name: UserName;
  address: UserAddress;
  phone: string;
  __v?: number;
}

interface UserName {
  firstname: string;
  lastname: string;
}

interface UserAddress {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: GeoLocation;
}

interface GeoLocation {
  lat: string;
  long: string;
}

export interface IFormEdit {
  props: UserModel;
}

export interface IState {
  listUsers: UserModel[];
}

export interface IUsersActions {
  type: string;
  response: UserModel[];
}
