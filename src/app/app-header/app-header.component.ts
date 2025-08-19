import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { HighlightTextDirective } from '../../Directives/highlight-text.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HighlightTextDirective],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent {
  constructor(private dialog: MatDialog) {

  }
  openModal() {
    this.dialog.open(LoginModalComponent, {
      width: '400px',
      autoFocus:true
    });
  }
  openSignupModal() {
    this.dialog.open(SignUpComponent, {
      width: '400px',
      autoFocus:true
    });
  }
}
