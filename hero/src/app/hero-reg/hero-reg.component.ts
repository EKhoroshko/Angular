import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-hero-reg',
  templateUrl: './hero-reg.component.html',
  styleUrls: ['./hero-reg.component.css']
})

export class HeroRegComponent implements OnInit {
  heroForm: FormGroup = new FormGroup({});

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
   
  onSubmit(){
    console.log(this.heroForm.value);
  }

  private initForm() {
    this.heroForm = this.fb.group({
      name: ['', [
        Validators.required]],
      password: ['', [
        Validators.required
      ]
      ],
    });
  }
}