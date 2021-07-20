import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {User, RedackUser} from './hero';
import { Observable} from "rxjs";

@Injectable({providedIn: 'root',})
export class httpService {

  
  private postUrl = 'https://reqres.in/';

 
  constructor(private http: HttpClient) {}

  postDataLogin(user: User) {
    return this.http.post(`${this.postUrl}api/login`, user);
  }

  postDataReg(user: User) {
    return this.http.post(`${this.postUrl}api/register`, user);
  }

  addUser(user: User){
    return this.http.post(`${this.postUrl}/api/users`, user);
  }

  getUsers(): Observable<any>{
    return this.http.get(`${this.postUrl}api/users?page=1`);
  }

  getUser(id: number): Observable<any> {
    const url = `${this.postUrl}api/users?page=1/${id}`;
    return this.http.get<any>(url)
  }

  deleteUser(id: number): Observable<any>{
    const url= `${this.postUrl}/${id}`;

    return this.http.delete<any>(url)
  }

  updateUser(user:RedackUser): Observable<any>{
    return this.http.put(`${this.postUrl}api/users/2`, user)
  } 
}