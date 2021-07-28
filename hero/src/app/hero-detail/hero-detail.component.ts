import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { httpService } from '../http.service';
import { RedackUser } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [httpService],
})
export class HeroDetailComponent implements OnInit {
  user!: {
    avatar: string;
    email: string;
    first_name: string;
    id: number;
    last_name: string;
    job: string;
  };

  visibility: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private httpService: httpService,
    private location: Location
  ) {}

  userSave: RedackUser = new RedackUser();

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.httpService.getUser(id).subscribe((user) => {
      this.user = user.data;
    });
  }
  
  goBack(): void {
    this.location.back();
  }

  save(userSave: RedackUser): void {
      this.httpService
        .updateUser(userSave)
        .subscribe((response) => console.log(response));
  
  }

  delete(id: number) {
    return this.httpService.deleteUser(id).subscribe();
  }

  toggle() {
    this.visibility = !this.visibility;
  }
}