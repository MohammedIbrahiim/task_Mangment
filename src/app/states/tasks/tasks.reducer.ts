import { createReducer, on } from '@ngrx/store';
import {addTaskss,deleteTasks,updateTasks,getTaskss,getTaskssSuccess} from './tasks.action';

import { EntityState, createEntityAdapter } from '@ngrx/entity';
import {Task} from 'src/app/interface/tasks'

export interface TodoState  {
    tasks:Task
}

export const initialState : TodoState={
    tasks:{    
        id:1,
        title:'',
        completed:false,
        userId:1
    }}




export const todoReducer = createReducer(
  initialState,
  on(getTaskssSuccess,state=>({...state})),

  on(addTaskss,state=>({...state})) ,
  on(updateTasks,state=>({...state})) ,
  on(deleteTasks, state=>({...state}))
);
