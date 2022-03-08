import {
  SET_USER_NAME,
  SET_USER_AGE,
  GET_CITIES,
  SET_TASK_ID,
  SET_TASKS,
  RESET_DATA,
} from "./action";

const initialState = {
  name: "",
  age: "",
  cities: [],
  tasks: [],
  taskID: 1,
  color: "white",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, name: action.payload };
    case SET_USER_AGE:
      return { ...state, age: action.payload };
    case GET_CITIES:
      return { ...state, cities: action.payload };
    case SET_TASK_ID:
      return { ...state, taskID: action.payload };
    case SET_TASKS:
      return { ...state, tasks: action.payload };
    case RESET_DATA:
      return initialState;
    default:
      return state;
  }
}

export default userReducer;
