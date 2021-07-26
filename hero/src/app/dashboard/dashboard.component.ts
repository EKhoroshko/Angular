import { Component, OnInit } from '@angular/core';
import { FormUser } from '../formUser';
import { RedackUser } from '../hero';
import { httpService } from '../http.service';

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

  add(): void {
    this.httpService.addUser(this.useradd).subscribe(() => {
      console.log(this.useradd);
    });
  }

  toggle() {
    this.visibility = !this.visibility;
  }
}