import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../hero';
import { httpService } from '../http.service';

@Component({
  selector: 'app-hero-reg',
  templateUrl: './hero-reg.component.html',
  styleUrls: ['./hero-reg.component.css'],
  providers: [httpService],
})
export class HeroRegComponent implements OnInit {
  user: User = new User();
  data!: Object;

  constructor(private httpService: httpService, private routes: Router) {}
  submit(user: User) {
    this.httpService.postDataReg(this.user).subscribe((data: Object) => {
      this.data = data;
      this.routes.navigate(['/base']);
    });
  }

  ngOnInit(): void {}
}