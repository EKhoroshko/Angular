import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from './hero';

@Injectable()
export class httpService{
    constructor(private http: HttpClient){ }
     
    postData(user: User){  
        const myHeaders=new HttpHeaders({'Content-Type':'application/json'})
        const body = { email: user.email, password: user.password }
        return this.http.post('https://reqres.in/api/login', body, {headers: myHeaders}); 
    }
}