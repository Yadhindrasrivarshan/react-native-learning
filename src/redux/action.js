export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_AGE = "SET_USER_AGE";
export const GET_CITIES = "GET_CITIES";

const API_URL = "https://mocki.io/v1/2b961451-24fc-43be-be22-b6600dc160be";
export const setName = (name) => (dispatch) => {
  console.log("Adding name", name);
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
