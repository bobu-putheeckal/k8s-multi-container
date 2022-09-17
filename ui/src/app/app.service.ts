import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  port = '3000';

  getUsers() {
    return this.http.get(`/users`);
    // return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  addUser(user: any, id: number) {
    user.id = id;
    // return this.http.post(this.rootURL + '/user', user);
    return this.http.post('/user', user);
  }

}
