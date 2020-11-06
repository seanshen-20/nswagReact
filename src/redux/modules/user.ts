// https://github.com/erikras/ducks-modular-redux

import { act } from "react-dom/test-utils";

// overload to solve no paylade completion 
export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P };
export function typedAction(type: string, payload?: any) {
  return { type, payload };
}

type UserState = {
    username: string | null
}

const initialState: UserState = {username : null}

const login = (username: string): { type: string; payload: string } => typedAction( 'user/LOGIN', username )
const logout = () => typedAction('user/LOGOUT')

type UserAction = ReturnType<typeof login | typeof logout>

export function userReducer(
    state = initialState,
    action: UserAction
): UserState {
    switch (action.type) {
        case 'user/LOGIN':
            return {username: action.pay}
        case 'user/LOGOUT':
            return {username : null}
        default:
            return state 
    }
}