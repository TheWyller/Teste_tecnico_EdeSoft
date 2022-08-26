import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import reduceCreateUser from "./modules/createUser/reducer";
import reduceDeleteUser from "./modules/deleteUser/reducer";
import reduceEditUser from "./modules/editarUser/reducer";
import reduceListUser from "./modules/listUsers/reducer";

const reducers = combineReducers({
  listUsers: reduceListUser,
  createUser: reduceCreateUser,
  deleteUser: reduceDeleteUser,
  editUser: reduceEditUser,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

export type AppDispatch = ThunkDispatch<{}, {}, any>;
