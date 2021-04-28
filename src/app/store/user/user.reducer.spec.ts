import { Action } from '@ngrx/store';
import { reducer, initialState } from './user.reducer';

describe('User Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action: Action = {type: 'asdf'};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
