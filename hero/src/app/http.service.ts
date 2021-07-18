import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from './hero';

@Injectable()
export class httpService {
  private postUrl = 'https://reqres.in';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  postData(user: User) {
    return this.http.post(`${this.postUrl}/api/login`, user, this.httpOptions);
  }
}