import { FieldValues } from "react-hook-form";

export function fixData(data: FieldValues) {
  return {
    email: data.email,
    username: data.userName,
    password: data.password,
    name: {
      firstname: data.firstname,
      lastname: data.lastname,
    },
    address: {
      city: data.city,
      street: data.street,
      number: data.number,
      zipcode: data.zipcode.toString(),
      geolocation: {
        lat: "0",
        long: "0",
      },
    },
    phone: data.phone.toString(),
  };
}
