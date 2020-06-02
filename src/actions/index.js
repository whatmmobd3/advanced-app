import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from "./types";

export function saveComment(data) {
  return {
    type: SAVE_COMMENT,
    payload: data,
  };
}

export function fetchComment() {
  // const response = axios.get("https://jsonplaceholder.typicode.com/comments");
  const response = axios.get("http://swapi.dev/api/people/1/");
  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
}

export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn,
  };
}
