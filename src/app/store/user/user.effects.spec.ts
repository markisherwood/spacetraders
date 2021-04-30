import { TestBed } from '@angular/core/testing';
import { UserService } from '@core/services/user.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';


import { UserEffects } from './user.effects';

type Spied<T> = {
  [Method in keyof T]: jasmine.Spy;
}

describe('UserEffects', () => {
  let actions$: Observable<Action>;
  let userService: Spied<UserService> = jasmine.createSpyObj('userService', [
    'register',
    'loadUser'
  ]);
  let effects: UserEffects;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UserEffects);
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('RegisterUser Effect', () => {
    it('Should generate success action', () => {

      testScheduler.run(({hot, cold, expectObservable}) => {
        actions$ = hot<Action>('-a', { 'a': { type: '[Login Component] Register User'}});
        userService.register.and.returnValue(cold('--a', { a: { response: 'success'}}));
      });
    });
  });
});
