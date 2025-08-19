import { CommonModule } from '@angular/common';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignUpResponse } from '../../Models/signup-response';
import { ResponseWrapper, ApiValidationErrorResponse } from '../../Models/response-wrapper';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  providers:[],
  imports: [ReactiveFormsModule,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signupForm : FormGroup;
  apiError! : string;

  constructor(private readonly http: HttpClient) {
    this.signupForm = new FormGroup({
      emailaddress:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required),
    })
  }
  handleSignup(){
    this.apiError = '';
    this.http.post<ResponseWrapper<SignUpResponse>>('https://localhost:7080/api/User/Login/Login', this.signupForm.value)
    .subscribe({
      next: data => {
        console.log(data);
      },
      error: (err) => {
        this.apiError = '';
        // validation response json comes under err.error.
        if (err.error?.errors) {
          const apiError: ApiValidationErrorResponse = err.error;
          const errors = apiError.errors;
          for(let key in errors){
            this.apiError += errors[key].join(' ');
          }
          //this.apiError = Object.values(apiError.errors).flat().join(' ');
        }
        else {
          this.apiError = err.message;
        }
      }
    })
  }
}
