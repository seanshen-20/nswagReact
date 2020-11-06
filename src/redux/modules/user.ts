// https://github.com/erikras/ducks-modular-redux

import { typedAction } from "./helper";
const initialState: UserState = { username: null };

export const login = (username: string) => typedAction("user/LOGIN", username);
export const logout = () => typedAction("user/LOGOUT");

type UserAction = ReturnType<typeof login | typeof logout>;

export function userReducer(
  state = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case "user/LOGIN":
      return { username: action.payload };
    case "user/LOGOUT":
      return { username: null };
    default:
      return state;
  }
}
