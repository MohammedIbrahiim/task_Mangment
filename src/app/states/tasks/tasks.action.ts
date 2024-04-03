import { createAction, props } from '@ngrx/store';
import { Task } from '../../interface/tasks';



// ============= get TASK ACTION ================
  export const getTasks = createAction('[get task] add' , props<{task:Task[]}>()) 
  // ============= ADD TASK ACTION ================
  export const addTask = createAction('[add task] add' , props<{task:Task}>()) 
  
  // ============= Remove Task Action ============= 
  export const reomveTask = createAction('[remove task] delete' , props<{taskId:number}>()) 


  // ============ apply effect =============
  export const invokeApi = createAction('[ task Api] Invoke APi' ) 