import { User } from '@core/models/user.interface';
import * as fromUser from './user.actions';

describe('loginUser', () => {
  it('should return an action', () => {
    expect(fromUser.registerUser({username: 'test'}).type).toBe('[User] Register User');
  });
  it('should return an action', () => {
    expect(fromUser.loginUser({username: 'test', token: 'asfd'}).type).toBe('[User] Login User');
  });
  it('should return an action', () => {
    const user: User = {
      username: 'test',
      credits: 0,
      loans: [],
      ships: [],      
    }
    expect(fromUser.loadUserSuccess({user, token: 'asdf'}).type).toBe('[User] Load User Success');
  });
  it('should return an action', () => {
    expect(fromUser.loadUserFailure({error: 'Login failed'}).type).toBe('[User] Load User Failure');
  });
});
