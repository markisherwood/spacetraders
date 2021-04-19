import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenResponse } from '@core/models/token-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  login(username: string): Observable<TokenResponse> {
    const encodedUsername = encodeURIComponent(username);
    return this.httpClient.get<TokenResponse>(`https://api.spacetraders.io/users/${encodedUsername}/token`);
  }
}
