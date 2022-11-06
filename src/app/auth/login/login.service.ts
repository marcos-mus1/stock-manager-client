import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthCredentials } from 'src/app/interface/dto';
import { User } from 'src/generated-types';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly httpClient: HttpClient) {}

  login(loginRequest: AuthCredentials) {
    return this.httpClient.post<User>('api/auth/login', loginRequest);
  }
}
