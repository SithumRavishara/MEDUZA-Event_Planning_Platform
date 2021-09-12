import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { User } from '../dto/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8087/api/users';

  constructor(private http: HttpClient) { }

  register(user) {
    return this.http.post<any>(this.url, user);
  }

  logIn(user) {
    return this.http.get<any>('http://localhost:8087/api/userLogin',
      { params: { email: user.email, password: user.password },
        observe: 'response'}
        );
  }

  getAllUsers() {
    return this.http.get<any>(this.url);
  }

}
