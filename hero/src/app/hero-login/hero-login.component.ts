import { Component, OnInit } from '@angular/core';
import { httpService } from '../http.service';
import {User} from '../hero';

@Component({
  selector: 'app-hero-login',
  templateUrl: './hero-login.component.html',
  styleUrls: ['./hero-login.component.css'],
  providers: [httpService]
})

export class HeroLoginComponent implements OnInit {
user: User = new User();

  constructor(private httpService: httpService) {}
  submit(user: User){
    this.httpService.postData(this.user).subscribe
      (data => console.log(data));
  }
  
  ngOnInit(): void {
  }
}