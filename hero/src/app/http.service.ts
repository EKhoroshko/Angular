import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, RedackUser } from './hero';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class httpService {
  private postUrl = 'https://reqres.in/';
  pages = 1;

  constructor(private http: HttpClient) {}

  incriment() {
    this.pages += 1;
  }

  nextPages(): Observable<any> {
    return this.http.get(`${this.postUrl}api/users?page=${this.incriment}`);
  }

  postDataLogin(user: User) {
    return this.http.post(`${this.postUrl}api/login`, user);
  }

  postDataReg(user: User) {
    return this.http.post(`${this.postUrl}api/register`, user);
  }

  addUser(user: RedackUser): Observable<RedackUser> {
    return this.http.post<RedackUser>(`${this.postUrl}/api/users`, user);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.postUrl}api/users?page=${this.pages}`);
  }

  getUser(id: number): Observable<any> {
    const url = `${this.postUrl}api/users/${id}`;
    return this.http.get<any>(url);
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.postUrl}api/users/${id}`;

    return this.http.delete<any>(url);
  }

  updateUser(user: RedackUser): Observable<any> {
    return this.http.put(`${this.postUrl}api/users/2`, user);
  }
}