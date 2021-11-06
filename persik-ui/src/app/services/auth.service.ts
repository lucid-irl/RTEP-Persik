import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API_URL = 'https://localhost:8080/api/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API_URL + 'signin', {username: username, password: password}, httpOptions);
  }

  register(fullNmame:string, email:string, phoneNumber:string, username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API_URL + 'signup', 
      {username: username, password: password, fullNmame: fullNmame, email: email, phoneNumber},
      httpOptions);
  }
}
