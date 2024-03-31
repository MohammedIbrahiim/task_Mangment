import { createAction, props } from '@ngrx/store';
import { Task } from '../../interface/tasks';




// ============= ADD TASK ACTION ================
  export const addTask = createAction('[add task] add' , props<{task:Task}>()) 

// ============= Remove Task Action ============= 
  export const reomveTask = createAction('[remove task] delete' , props<{taskId:number}>()) 
