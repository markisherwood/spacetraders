import { LoadableState } from '@core/models/loadable-state.interface';
import { User } from '@core/models/user.interface';
import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface State extends LoadableState {
  user?: User,
  token? : string
  error?: string,
}

export const initialState: State = {
  loadingState: 'Not Loaded',
};


export const reducer = createReducer(
  initialState,

  on(UserActions.registerUser, (state) => {
    const newState: State = {
      ...state,
      loadingState: 'Loading',
    }
    return newState;
  }),
  on(UserActions.loginUser, (state) => {
    const newState: State = {
      ...state,
      loadingState: 'Loading',
    }
    return newState;
  }),
  on(UserActions.loadUserSuccess, (state, action) => {
    const newState: State = {
      ...state,
      user: action.user,
      token:  action.token,
      loadingState: 'Loaded',
    }
    return newState;
  }),
  on(UserActions.loadUserFailure, (state, action) => {
    const newState: State = {
      ...state,
      error: action.error,
      loadingState: 'Error',
    };
    return newState;
  }),
);

