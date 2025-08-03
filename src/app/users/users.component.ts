import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserComponent } from '../user/user.component';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule,CommonModule,UserComponent,AddUserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  userNames: string[] = [];
  suggestionTemplate!: TemplateRef<any>;
  @ViewChild('insertNameThenSubmit', { static: true }) insertNameThenSubmit!: TemplateRef<any>;
  @ViewChild("insertName", { static: true }) insertName!: TemplateRef<any>;

  ngOnInit(): void {
    this.suggestionTemplate = this.insertNameThenSubmit;
  }

  handleUserAdded(event: string) {
    this.userNames.push(event);
  }
  handleRemoveUser(event: Event, index: number) {
    this.userNames.splice(index, 1);
  }
}
