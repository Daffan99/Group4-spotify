import { type } from "@testing-library/user-event/dist/type";
import { auth_types } from "./types";

const init = {
  email: "",
  password: "",
};

function userReducer(state = init, action) {
  // action adalh event yang terjadi
  if (action.type == auth_types.login) {
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
      name: action.payload.name,
      birthdate: action.payload.birthdate,
    };
  } else if (action.type == auth_types.logout) {
    return init;
  }
  return state;
}

export default userReducer;

// const aksi = {
//     payload:{},
//     type:""
// };

// aksi.type='login',
// aksi.payload = {email:'aaa@mail.com' password: '123'}

// userRreducer(state, aksi);

// {
//     type: 'login',

// }
