import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-base',
  templateUrl: './hero-base.component.html',
  styleUrls: ['./hero-base.component.css'],
})
export class HeroBaseComponent implements OnInit {
  title = 'Welcome';

  constructor() {}

  ngOnInit(): void {}
}
