import { SAVE_COMMENT, FETCH_COMMENTS } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      debugger;
      const comments = action.payload.data
      return [...state, action.payload.data];
    default:
      return state;
  }
}
