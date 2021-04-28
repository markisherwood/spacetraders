import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const selectUser = createSelector(
  selectUserState,
  (userState: fromUser.State) => (userState.user)
);
export const selectUserLoadingState = createSelector(
  selectUserState,
  (userState: fromUser.State) => (userState.loadingState)
);
export const selectUserToken = createSelector(
  selectUserState,
  (userState: fromUser.State) => (userState.token)
);
export const selectUserError = createSelector(
  selectUserState,
  (userState: fromUser.State) => (userState.error)
);