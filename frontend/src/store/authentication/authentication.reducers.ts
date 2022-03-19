import {
 START_LOADING_AUTH,
 END_LOADING_AUTH,
 AUTH_FAILED,
 AUTH_SUCCEEDED,
 START_LOADING_REGISTER,
 END_LOADING_REGISTER,
 REGISTRATION_FAILED,
 REGISTRATION_SUCCEEDED,
} from "./types";

export interface START_LOADING_AUTH {
 readonly type: "START_LOADING_AUTH";
}
export interface END_LOADING_AUTH {
 readonly type: "END_LOADING_AUTH";
}
export interface AUTH_SUCCEEDED {
 readonly type: "AUTH_SUCCEEDED";
 payload: {
  accessToken: string;
 };
}
export interface AUTH_FAILED {
 readonly type: "AUTH_FAILED";
}
export interface START_LOADING_REGISTER {
 readonly type: "START_LOADING_REGISTER";
}
export interface END_LOADING_REGISTER {
 readonly type: "END_LOADING_REGISTER";
}
export interface REGISTRATION_FAILED {
 readonly type: "REGISTRATION_FAILED";
}
export interface REGISTRATION_SUCCEEDED {
 readonly type: "REGISTRATION_SUCCEEDED";
 payload: {
  accessToken: string;
 };
}

export default (
 state = {
  AccessToken: null,
 },
 action:
  | START_LOADING_AUTH
  | END_LOADING_AUTH
  | AUTH_SUCCEEDED
  | AUTH_FAILED
  | START_LOADING_REGISTER
  | END_LOADING_REGISTER
  | REGISTRATION_FAILED
  | REGISTRATION_SUCCEEDED
) => {
 switch (action.type) {
  case START_LOADING_AUTH:
   return {...state, Loading: true, LoginError: false};
  case START_LOADING_REGISTER:
   return {...state, LoadingRegistration: true, RegistrationError: false};
  case AUTH_FAILED:
   return {
    ...state,
    Loading: false,
    LoginError: true,
    isAuthenticated: false,
   };
  case REGISTRATION_FAILED:
   return {
    ...state,
    LoadingRegistration: false,
    RegistrationError: true,
    isAuthenticated: false,
   };
  case AUTH_SUCCEEDED:
   return {
    ...state,
    AccessToken: action.payload.accessToken ? action.payload.accessToken : null,
    Loading: false,
    LoginError: action.payload.accessToken ? false : true,
    isAuthenticated: action.payload.accessToken ? true : false,
    isFromLogin: true,
   };
  case REGISTRATION_SUCCEEDED:
   return {
    ...state,
   };
  case END_LOADING_AUTH: {
   return {...state, Loading: false};
  }
  case END_LOADING_REGISTER: {
   return {...state, LoadingRegistration: false};
  }
  default:
   return state;
 }
};
