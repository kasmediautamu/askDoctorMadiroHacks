import { createSelector } from "reselect";

const selectAuth = (state: { authentication: any }) => state.authentication;
export const selectAuthentication = createSelector(
  [selectAuth],
  (auth) => auth
);
