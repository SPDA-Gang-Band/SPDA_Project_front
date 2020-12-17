import { loginActions } from "../constants";

const initialState = {
  login: null
}

export function loginReducer (state = initialState, action) {
  switch (action.type) {
    case loginActions.LOGIN:
      return {login: action.payload}
    case loginActions.LOGOUT:
      return {login: null}
    default:
      return {login: null}
  }
}
