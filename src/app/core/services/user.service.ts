import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenResponse } from '@core/models/token-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public tokenUrl = `https://api.spacetraders.io/users/:username/token`;
  public userUrl = `https://api.spacetraders.io/users/:username`;


  constructor(private httpClient: HttpClient) { }

  register(username: string): Observable<TokenResponse> {
    const url = this.buildTokenUrl(username);
    return this.httpClient.get<TokenResponse>(url);
  }

  loadUser(username: string, token: string): Observable<TokenResponse> {
    const url = this.buildUserUrl(username);
    return this.httpClient.get<TokenResponse>(url);
  }

  buildTokenUrl(username: string): string {
    return this.buildUrl(this.tokenUrl, username);
  }

  buildUserUrl(username: string): string {
    return this.buildUrl(this.userUrl, username);
  }

  buildUrl(url: string, username: string): string {
    return url.replace(':username', encodeURIComponent(username));
  }
}
