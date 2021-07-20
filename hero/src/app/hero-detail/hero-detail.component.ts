import { Component, OnInit, Input } from '@angular/core';
import { FormUser } from '../heroes/formUser';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { httpService } from '../http.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [httpService]
})
  
export class HeroDetailComponent implements OnInit {
  user: FormUser | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private httpService: httpService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.httpService.getUser(id).subscribe((user) => (this.user = user));
  }
  goBack(): void {
    this.location.back();
  }

  /*save(): void{
    if(this.user){
      this.httpService.updateUser(this.user)
      .subscribe(() => this.goBack());
    }
  }*/

}
