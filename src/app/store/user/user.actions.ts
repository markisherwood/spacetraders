import { User } from '@core/models/user.interface';
import { createAction, props } from '@ngrx/store';

export const registerUser = createAction(
  '[Login Component] Register User',
  props<{username: string}>()
);
export const loginUser = createAction(
  '[Login Component] Login User',
  props<{username: string, token: string}>()
);

export const loadUserSuccess = createAction(
  '[User Service] Load User Success',
  props<{ user: User, token: string }>()
);

export const loadUserFailure = createAction(
  '[User Service] Load User Failure',
  props<{ error: string }>()
);
