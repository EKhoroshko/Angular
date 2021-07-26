import { Component, OnInit } from '@angular/core';
import { FormUser } from '../formUser';
import { RedackUser } from '../hero';
import { httpService } from '../http.service';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [httpService],
})
export class DashboardComponent implements OnInit {
  jobs: string = 'worker';
  users: FormUser[] = [];
  visibility: boolean = true;
  useradd!: RedackUser;
 
  constructor(private httpService: httpService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.httpService.getUsers().subscribe((response) => {
      this.users = response.data;
    });
  }

  nextUsers() {
    this.httpService.nextPages().subscribe((response) => {
      this.users = response.data;
    });
  }

  prewUsers(){
    this.httpService.prewPages().subscribe((response) => {
      this.users = response.data;
    });
  }

  add(): void {
    this.httpService.addUser(this.useradd).subscribe();
  }

  toggle() {
    this.visibility = !this.visibility;
  }
}