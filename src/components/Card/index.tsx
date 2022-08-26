import { UserModel } from "../../interfaces/users.interfaces";
import { CardStyled } from "./style";

const Card = ({ username, email, name, phone, address }: UserModel) => {
  return (
    <CardStyled>
      <h3>UserName:</h3>
      <p>{username}</p>

      <h3>Nome:</h3>
      <p>{name.firstname}</p>

      <h3>Sobrenome:</h3>
      <p>{name.lastname}</p>

      <h3>Email:</h3>
      <p>{email}</p>

      <h3>Endereço:</h3>
      <ul>
        <li>Cidade: {address.city}</li>
        <li>Rua: {address.street}</li>
        <li>Cep: {address.zipcode}</li>
      </ul>

      <h3>Telefone:</h3>
      <p>{phone}</p>
    </CardStyled>
  );
};

export default Card;
