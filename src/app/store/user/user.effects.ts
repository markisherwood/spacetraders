import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as UserActions from './user.actions';
import { UserService } from '@core/services/user.service';



@Injectable()
export class UserEffects {

  registerUser$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(UserActions.registerUser),
      concatMap((action) =>
        this.userService.register(action.username).pipe(
          map(tokenResponse => UserActions.loadUserSuccess(tokenResponse)),
          catchError(() => of(UserActions.loadUserFailure({ error: 'Loading Failed' })))
        )
      )
    )
  });

  constructor(private actions$: Actions, private userService: UserService) {}

}
