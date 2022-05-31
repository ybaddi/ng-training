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

  delete(id:number){
    return this.http.delete("http://localhost:3000/todos/"+id);
  }
}
