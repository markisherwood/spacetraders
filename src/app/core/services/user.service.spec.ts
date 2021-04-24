import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService as UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { TokenResponse } from '@core/models/token-response.interface';

describe('UserService', () => {
  let userService: UserService;
  let httpClient: HttpClient;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    httpClient = TestBed.inject(HttpClient)
    backend = TestBed.inject(HttpTestingController)
    userService = new UserService(httpClient);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    backend.verify();
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should return token', () => {
    const testUsername = 'dracs';
    const testData: TokenResponse = {
      token: 'd103ecf4-5076-4fb5-abff-853a9a3099ae',
      user: {
        username: testUsername,
        credits: 12345,
        loans: null,
        ships: null,
      }
    };

    const url = userService.buildTokenUrl(testUsername);
    
    userService.register(testUsername)
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual(testData)
      );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = backend.expectOne(url);

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);
  })
});
