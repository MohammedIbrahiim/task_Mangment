import { createReducer, on } from '@ngrx/store';

import { EntityState, createEntityAdapter } from '@ngrx/entity';
import {Task} from 'src/app/interface/tasks'
import {addTask , reomveTask} from '../tasks/tasks.action'



export const initalState:ReadonlyArray<Task> = []

// task reducer create by ==> (createreducer)
//  in  createReducer(it take first (initalState) 
//  second ( on (action name  , and arrow function take 2 parameter the new array that name state && old array that name task)))

const _taskReducer = createReducer(
    initalState ,
    // add task 
    on(addTask , (state,{task})=>{
        return [...state , task]
    }),

    // remove task
    on(reomveTask,(state,{taskId})=>{
        return [
            ...state.slice(0,taskId),
            ...state.slice(taskId+1)
        ]
    })
    )


// ===================== create task reducer to export it and used it to other file and take two paramter state && action =========
export function tasksReducer (state:any , action:any){
    return _taskReducer(state , action)
}