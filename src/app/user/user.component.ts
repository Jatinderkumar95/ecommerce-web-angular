import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() userName: string = '';
  @Output() userRemoved: EventEmitter<Event> = new EventEmitter<Event>();
  handleRemoveUser(event: Event) {
    this.userRemoved.emit(event);
  }
}
