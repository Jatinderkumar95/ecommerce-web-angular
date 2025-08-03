import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent {

  constructor(private dialog: MatDialog) {

  }
  openModal() {
    this.dialog.open(LoginModalComponent, {
      width: '400px',
      height: '300px',
      disableClose: true
    });
  }
}
