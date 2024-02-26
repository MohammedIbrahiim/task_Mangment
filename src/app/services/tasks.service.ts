import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Task} from '../interface/tasks'
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  baseurl: string = `https://jsonplaceholder.typicode.com/`
  constructor(private _HttpClient:HttpClient) { }
  
  getLeads(): Observable<any> {
    return this._HttpClient.get<Task>(this.baseurl+'todos');
  }
  addTask(data:{id:number,title:string,completed:boolean,userId:number}): Observable<any> {
    return this._HttpClient.post(this.baseurl+'todos',data);
  }
  deleteTask(id:number): Observable<any> {
    return this._HttpClient.delete(this.baseurl+'todos/'+id);
  }

  updateTask(data:any): Observable<any> {
    return this._HttpClient.put(this.baseurl+'todos/',data);
  }

}
