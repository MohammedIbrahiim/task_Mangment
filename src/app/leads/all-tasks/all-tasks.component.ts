import { Component, OnInit, ViewChild} from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from'../../interface/tasks'
import {MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';

// ==============import actions from ngrx ==================
import{addTask,reomveTask} from'../../states/tasks/tasks.action'
import{selectTaskById} from'../../states/tasks/tasks.selector'
// =============for make dispatch ===============
import { select,Store,props } from '@ngrx/store';
import { Observable } from 'rxjs';
// import {AppState} from '../../states/app.state'

const ELEMENT_DATA: Task[] = [];
@Component({
  selector: 'app-all-leads',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})


export class AllTasksComponent implements OnInit   {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['title' ,'action'];
  dataSource = new MatTableDataSource<Task>(ELEMENT_DATA);
  dataArray:Task []= [];
  taskArray :Observable<Task[]> | undefined ;
  formTask:FormGroup = new FormGroup ({
    title:new FormControl(null),
    userId:new FormControl(1),
    id:new FormControl(1),
    completed:new FormControl(false)
  })

  constructor(private _TasksService:TasksService , private _store:Store<{task:Task[]}>){

          // ===========this._store.pipe(select('task')) this 'task' from this task  _store:Store<{task:Task[]}>
          this.taskArray =   this._store.pipe(select('task'))
          console.log(this.taskArray);
  }

    ngOnInit(): void {
    this.getAllLeads()
  }


  // ============================================================== get all data tasks ==================================================
  getAllLeads(){
    console.log('test');
    
      this._TasksService.getLeads().subscribe(res=>{
        this.dataArray = res
        console.log(this.dataArray);
        
        this.tableDataWithpaginator()
      })


    
}
  // ============================================================== add task ==================================================
  addTask(formInfo:FormGroup){
    this.dataArray.unshift(formInfo.value)
    this._TasksService.addTask(formInfo.value).subscribe((res)=>{
      console.log(res);
      
    })

    // ================== to dispatch and listen at action to send data .dispatch (actionname (key that i pass it at action :value ))=========
    this._store.dispatch(addTask({task:formInfo.value}))
    this.tableDataWithpaginator()
    
  }

  // ============================================================== for delete task by id ==================================================
  deleteTask(id:number){
    this._TasksService.deleteTask(id).subscribe((res)=>{
      console.log(res);
      
    })
// ================== for delete task by ngrx with removeTask action =======================
    this._store.dispatch(reomveTask({taskId:id}))
    let index = this.dataArray.findIndex((item)=>item.id==id)
    this.dataArray.splice(index,1)
    this.tableDataWithpaginator()
  }
  // ============================================================== for update status task by id ==================================================

  updateStatus(id:number){
    let index = this.dataArray.findIndex((item)=>item.id==id)
    this.dataArray[index].completed = !this.dataArray[index].completed
  }


  tableDataWithpaginator(){
    this.dataSource = new MatTableDataSource<Task>(this.dataArray);        
    this.dataSource.paginator = this.paginator;
  }
  selectTask:Task |undefined 
  taskByIndex (index:number){
    this._store.pipe(select(selectTaskById(index))).subscribe(res=>{
      this.selectTask = res
      console.log(res);
      
    })
  }
}

