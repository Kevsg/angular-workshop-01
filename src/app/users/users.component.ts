import { Component, OnInit } from '@angular/core';

interface Item {
  title: string
  done: boolean
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  firstName = '';
  lastName = '';
  show = true;
  users = [
    {title: "Getting Apple", done: false}
  ];
  name = '';
  done = 0;

  constructor() { }

  ngOnInit(): void {
  }

  inputYourName(event: any): void {
    this.firstName = event.target.value;
  }

  inputLastName(lastname: string): void {
    this.lastName = lastname;
  }

  toggle(index: number) {
    if(!this.users[index].done) {
      this.done = this.done+1;
    } else {
      this.done = this.done-1;
    }
    this.users[index].done = !this.users[index].done
  }

  save(): void {
    if (this.firstName == null || this.firstName.trim() === ''){
      return
    }
    this.name = `${this.firstName} ${this.lastName}`
    this.users.push({title: this.name, done: false})
  }

}
