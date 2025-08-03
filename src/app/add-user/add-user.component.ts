import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  userButtonStatus: boolean = false;
  buttonAriaLabel: string = "Submit button";
  buttonRole = "button";
  userName!: string;
  @Output() userAdded: EventEmitter<string> = new EventEmitter<string>();


   handleSubmit(event: Event) {
    if (event.target instanceof HTMLInputElement) {
      console.log((event.target as HTMLInputElement).value);
    }
    else if (event.target instanceof HTMLHeadingElement) {
      console.log((<HTMLHeadingElement>event.target).innerHTML);
    }
    if (this.userName) {
      this.userAdded.emit(this.userName);
      this.userName = '';
    }
  }
}
