import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1, 'Master Angular', false, new Date() ),
          new Todo(2, 'Master Angular Material', false, new Date() ),
          new Todo(3, 'Master Angular MDB', false, new Date() )]

  
    constructor() { }

  ngOnInit(): void {
  }

}
export class Todo {
  constructor(
      public id: number,
      public description: string,
      public done: boolean,
      public targetDate: Date
  ){}
  }
