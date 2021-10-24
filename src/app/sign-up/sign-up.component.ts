import { Component, OnInit } from '@angular/core';
import { SignUp } from '../models/signUpForm';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
model : SignUp = new SignUp();

  constructor() { }

  ngOnInit(): void {
  }
 onSubmit() {
   console.log(this.model);
 }
}
