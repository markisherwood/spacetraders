import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenResponse } from '@core/models/token-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public tokenUrl = `https://api.spacetraders.io/users/:username/token`;


  constructor(private httpClient: HttpClient) { }

  login(username: string): Observable<TokenResponse> {
    const url = this.buildTokenUrl(username);
    return this.httpClient.get<TokenResponse>(url);
  }

  buildTokenUrl(username: string): string {
    return this.buildUrl(this.tokenUrl, username);
  }

  buildUrl(url: string, username: string): string {
    return url.replace(':username', encodeURIComponent(username));
  }
}
