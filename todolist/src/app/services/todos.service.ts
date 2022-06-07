import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Todo[]>("http://localhost:3000/todos");
  }

  add(todo:Todo){
    return this.http.post("http://localhost:3000/todos/", todo);
  }

  update(todo:Todo){
    return this.http.put(`http://localhost:3000/todos/${todo.id}`, todo);
  }

  delete(todo:Todo){
    console.log(todo);
    return this.http.delete("http://localhost:3000/todos/"+todo.id);
  }
}
