import {
  START_LOADING_AUTH,
  END_LOADING_AUTH,
  AUTH_SUCCEEDED,
  AUTH_FAILED,
  START_LOADING_REGISTER,
  REGISTRATION_FAILED,
  END_LOADING_REGISTER,
  REGISTRATION_SUCCEEDED,
} from "../authentication/types";
import DataSvc from "../../services/api";

export const loginUser =
  ({email, password}: {email: string; password: string}) =>
  async (
    dispatch: (action: {type: string; payload?: any}) => void,
    getState: any
  ) => {
    let token = getState().authentication.AccessToken;
    if (token) {
      dispatch({type: AUTH_FAILED});
      return;
    }
    let response;
    dispatch({type: START_LOADING_AUTH});
    try {
      const backendSvc = new DataSvc("/login");
      response = backendSvc.postData({email, password}, token || "");
    } catch (error) {
      dispatch({type: AUTH_FAILED, payload: (await response)?.status});
      dispatch({type: END_LOADING_AUTH});
    }
    dispatch({type: AUTH_SUCCEEDED, payload: (await response)?.data});
    dispatch({type: END_LOADING_AUTH});
  };

export const registerUser =
  ({
    firstname,
    lastname,
    email,
    password,
    contact,
    address,
    terms,
  }: {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    contact: string;
    address: string;
    terms: Boolean;
  }) =>
  async (
    dispatch: (action: {type: string; payload?: any}) => void,
    getState: any
  ) => {
    let response;
    let token = getState().authentication.AccessToken;
    if (token) {
      dispatch({type: REGISTRATION_FAILED});
    }

    dispatch({type: START_LOADING_REGISTER});
    try {
      const backendSvc = new DataSvc("/register");
      response = backendSvc.postData(
        {
          firstname,
          lastname,
          email,
          password,
          contact,
          address,
          terms,
        },
        token || ""
      );
    } catch (error) {
      dispatch({
        type: REGISTRATION_FAILED,
        payload: (await response)?.status,
      });
      dispatch({type: END_LOADING_REGISTER});
    }
    dispatch({type: REGISTRATION_SUCCEEDED, payload: (await response)?.data});
    dispatch({type: END_LOADING_REGISTER});
  };
