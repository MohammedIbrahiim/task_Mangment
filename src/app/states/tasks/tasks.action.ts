import { createAction, props } from '@ngrx/store';
import { Task } from '../../interface/tasks';

export const getTaskss = createAction('[Tasks] Get Tasks');
export const getTaskssSuccess = createAction(
  '[Tasks] Get Tasks success',
  (Taskss: ReadonlyArray<Task>) => ({ Taskss })
  // props<{ Taskss: ReadonlyArray<Tasks> }>()
);
export const addTaskss = createAction(
  '[Tasks] Add Tasks',
  (Tasks: Task) => ({ Tasks })
  // props<{ Tasks: Tasks }>()
);
export const addTaskssSuccess = createAction(
  '[Tasks] Add Tasks success',
  // props<{ Tasks: Tasks }>(),
  (Tasks: Task) => ({ Tasks })
);

export const assignUser = createAction(
  '[User] assign user',
  (user: string) => ({ user })
);

export const deleteTasks = createAction(
  '[Tasks] Delete Tasks',
  (TasksId: number) => ({ TasksId })
);

export const deleteTasksSuccess = createAction(
  '[Tasks] Delete Tasks success',
  (TasksId: number) => ({ TasksId })
);

export const updateTasks = createAction(
  '[Tasks] Update Tasks',
  (Tasks: Task) => ({ Tasks })
);

export const updateTasksSuccess = createAction(
  '[Tasks] Update Tasks success',
  (Tasks: Task) => ({ Tasks })
);

export const logout = createAction('[User] logout');