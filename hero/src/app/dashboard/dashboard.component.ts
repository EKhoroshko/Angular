import { Component, OnInit } from '@angular/core';
import { FormUser } from '../heroes/formUser';
import {httpService} from '../http.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [httpService]
})
export class DashboardComponent implements OnInit {
  users:FormUser[] = [];
 
  constructor(private httpService: httpService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
     this.httpService.getUsers()
    .subscribe((response)=> {
      this.users = response.data});
  }
}