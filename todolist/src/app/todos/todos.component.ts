import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private todosService:TodosService) { }
  todos:Todo[] = [];
  ngOnInit(): void {
    this.todosService.getAll().subscribe(
      (res) => {
        this.todos = res;
      });
  }


  delete(id:number){
    this.todosService.delete(id).subscribe(
      ()=>{
        console.log("delete");
        this.todos = this.todos.filter((todo)=>{todo.id!=id});
      });
  }

}
