import { Component } from '@angular/core';
import { HighlightTextDirective } from '../../Directives/highlight-text.directive';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [HighlightTextDirective],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {

}
