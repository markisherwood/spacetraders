import { User } from '@core/models/user.interface';
import * as fromUser from './user.actions';

describe('loginUser', () => {
  it('should return an action', () => {
    expect(fromUser.registerUser({username: 'test'}).type).toBe('[Login Component] Register User');
  });
  it('should return an action', () => {
    expect(fromUser.loginUser({username: 'test', token: '1234'}).type).toBe('[Login Component] Login User');
  });
  it('should return an action', () => {
    const user: User = {
      username: 'test',
      credits: 0,
      loans: [],
      ships: [],
    }
    expect(fromUser.loadUserSuccess({user, token: '1234'}).type).toBe('[User Service] Load User Success');
  });
  it('should return an action', () => {
    expect(fromUser.loadUserFailure({error: 'Login failed'}).type).toBe('[User Service] Load User Failure');
  });
});
