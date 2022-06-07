import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  listTodos:boolean=false;
  noTodos:boolean=false;
  editTodoForm:boolean=false;
  
  myTodo: Todo={
    name: '',
    description: '',
    completed: false
  }
  constructor(private todosService:TodosService) { }
  todos:Todo[] = [];
  
  ngOnInit(): void {
    this.todosService.getAll().subscribe(
      (res) => {
        this.todos = res;
      });
  }

  resetForm(){
    this.myTodo={
      name: '',
      description: '',
      completed: false
    };
    this.editTodoForm=false;
  }

  addTodo(){
    this.todosService.add(this.myTodo).subscribe(
      (todo)=>{
        console.log("delete");
        // this.todos.push(todo);
        this.todos = [todo, ...this.todos];
        this.resetForm();
      });
  }


  editTodo(todo:Todo){
     this.myTodo=todo;
     this.editTodoForm=true;
  }

  
  updateTodo(){
    this.todosService.update(this.myTodo).subscribe(
      (todo)=>{
        // this.todos.push(todo);
        //this.todos = [todo, ...this.todos];
        // this.updateTask();
        this.resetForm();
      });
  }

  delete(task:Todo){
    console.log(task);
    this.todosService.delete(task).subscribe(
      ()=>{
        console.log(task.id);
        // this.todos = this.todos.filter((t)=>{t.id=task.id});
        const indexOfObject = this.todos.findIndex((object) => {
          return object.id === task.id;
        });
       
        if (indexOfObject !== -1) {
          this.todos.splice(indexOfObject, 1);
        }
        
      });
  }

}
