import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { httpService } from '../http.service';

@Component({
  selector: 'app-hero-reg',
  templateUrl: './hero-reg.component.html',
  styleUrls: ['./hero-reg.component.css'],
})
export class HeroRegComponent implements OnInit {
  user: FormGroup = new FormGroup({});
  data!:any;

  constructor(private fb: FormBuilder, private httpService: httpService) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    this.httpService.postData(this.user).subscribe((data: any) => {
      this.data = data;
      console.log(this.data);
    });
    console.log(this.user.value);
  }

  private initForm() {
    this.user = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}