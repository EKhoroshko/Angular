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
    const controls = this.heroForm.controls;

    if(this.heroForm.invalid){
      Object.keys(controls)
      .forEach(controlName => controls[controlName]
      .markAsTouched());

      return;
    }

    console.log(this.heroForm.value);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.heroForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  private initForm() {
    this.heroForm = this.fb.group({
      email: ['', [
        Validators.required, Validators.email
      ]
      ],
      password: ['', [
        Validators.required
      ]
      ],
    });
  }

 
}
