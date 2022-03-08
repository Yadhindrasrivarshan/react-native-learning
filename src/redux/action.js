export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_AGE = "SET_USER_AGE";
export const GET_CITIES = "GET_CITIES";
export const SET_TASKS = "SET_TASKS";
export const SET_TASK_ID = "SET_TASK_ID";

export const RESET_DATA = "RESET_DATA";
const API_URL = "https://mocki.io/v1/2b961451-24fc-43be-be22-b6600dc160be";
export const setName = (name) => (dispatch) => {
  dispatch({
    type: SET_USER_NAME,
    payload: name,
  });
};

export const setAge = (age) => (dispatch) => {
  dispatch({
    type: SET_USER_AGE,
    payload: age,
  });
};

export const setTasks = (tasks) => (dispatch) => {
  dispatch({
    type: SET_TASKS,
    payload: tasks,
  });
};

export const setTaskID = (taskID) => (dispatch) => {
  dispatch({
    type: SET_TASK_ID,
    payload: taskID,
  });
};
export const resetData = () => (dispatch) => {
  dispatch({
    type: RESET_DATA,
  });
};
export const getCitites = () => {
  try {
    return async (dispatch) => {
      const result = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await result.json();

      if (json) {
        dispatch({
          type: GET_CITIES,
          payload: json,
        });
      } else {
        console.log("Unable to fetch data");
      }
    };
  } catch (error) {}
};
