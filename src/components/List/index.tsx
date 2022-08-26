import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../interfaces/users.interfaces";
import { useAppDispatch } from "../../store/modules/hooks";
import { listUsersThunk } from "../../store/modules/listUsers/thunks";
import Card from "../Card";
import { ListStyled } from "./style";

const List = () => {
  const { listUsers } = useSelector<any, IState>((state) => state);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listUsersThunk());
  }, [dispatch]);

  return (
    <ListStyled>
      {listUsers.map((elem, index) => (
        <Card
          key={index}
          address={elem.address}
          email={elem.email}
          name={elem.name}
          phone={elem.phone}
          username={elem.username}
        />
      ))}
    </ListStyled>
  );
};

export default List;
