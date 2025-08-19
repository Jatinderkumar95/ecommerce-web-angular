import { Component,  ViewChild } from '@angular/core';
import { HighlightTextDirective } from '../../Directives/highlight-text.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {  FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [HighlightTextDirective,MatFormFieldModule,MatInputModule,MatIconModule,CommonModule,FormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {

  formGroup : FormGroup;

 
  constructor() {
    this.formGroup = new FormGroup({
      email: new FormControl(null,Validators.required),
      password: new FormControl('password ')
    });
  }
  @ViewChild('formLogin') formLogin: any;
  handleLogin(event: NgForm): void {
    console.log(event);
  }
}
