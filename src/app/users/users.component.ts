import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  firstName = '';
  lastName = '';
  show = true;
  todos: User[] = [
    { title: "Getting Apple", done: false }
  ];
  name = '';
  done = 0;

  get f() {
    return this.loginForm.controls;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, , Validators.minLength(4)]]
    })
  }


  // inputYourName(event: any): void {
  //   this.firstName = event.target.value;
  // }

  // inputLastName(lastname: string): void {
  //   this.lastName = lastname;
  // }

  toggle(index: number) {
    if (!this.todos[index].done) {
      this.done = this.done + 1;
    } else {
      this.done = this.done - 1;
    }
    this.todos[index].done = !this.todos[index].done
  }

  // save(): void {
  //   if (this.firstName == null || this.firstName.trim() === ''){
  //     return
  //   }
  //   this.name = `${this.firstName} ${this.lastName}`
  //   this.users.push({title: this.name, done: false})
  // }

  saveData(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const fullName = `${this.f.firstName.value} ${this.f.lastName.value}`
    this.todos.push(new User(fullName, false))
  }

}
