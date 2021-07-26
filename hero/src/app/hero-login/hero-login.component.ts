import { Component, OnInit } from '@angular/core';
import { httpService } from '../http.service';
import { User } from '../hero';
import { Router } from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-hero-login',
  templateUrl: './hero-login.component.html',
  styleUrls: ['./hero-login.component.css'],
  providers: [httpService],
})
export class HeroLoginComponent implements OnInit {
  user: User = new User();
  data!: Object;

  constructor(private httpService: httpService, private routes: Router, private auth:AuthService) {}
  submit(user: User) {
    this.httpService.postDataLogin(this.user).subscribe((data) => {
     this.data = data;
     this.auth.sendToken(data)
        this.routes.navigate(['/dashboard']);
    });
  }

  ngOnInit(): void {}
}