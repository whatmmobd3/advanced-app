import { CHANGE_AUTH } from "../actions/types";

export default function (state = false, action) {
  switch (action.type) {
    default:
      return state;
    case CHANGE_AUTH:
      return action.payload;
  }
}
