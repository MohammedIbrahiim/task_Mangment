import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY, EmptyError } from 'rxjs';
import {catchError,concatMap,exhaustMap,map,mergeMap,switchMap,tap,} from 'rxjs/operators';
import { TasksService } from 'src/app/services/tasks.service';
import {addTask,getTasks,reomveTask,invokeApi} from '../tasks/tasks.action';
@Injectable()
export class TasksEffects {
  constructor(private action$: Actions, private _tasksService: TasksService) {}

  loadTasks$ = createEffect(() =>
    this.action$.pipe(
        ofType(invokeApi),
      switchMap(() =>
        this._tasksService.getLeads().pipe(
          map((todo) => getTasks({task:todo})),
          catchError(() => EMPTY)
        )
      )
    )
  );

//   addTasks$ = createEffect(() =>
//     this.action$.pipe(
//       ofType(addTaskss),
//       tap((task) => console.log(task)),
//       concatMap(({ Tasks }) =>
//         this._tasksService.addTask(Tasks).pipe(
//           map((newTask) => addTaskss(newTask)),
//           catchError(() => EMPTY)
//         )
//       )
//     )
//   );


//   deleteTasks$ = createEffect(() =>
//     this.action$.pipe(
//       ofType(deleteTasks),
//       mergeMap(({ TasksId }) =>
//         this._tasksService.deleteTask(TasksId).pipe(
//           map((id) => deleteTasks(id)),
//           catchError(() => EMPTY)
//         )
//       )
//     )
//   );

//   updateTasks$ = createEffect(() =>
//     this.action$.pipe(
//       ofType(updateTasks),
//       concatMap(({ Tasks }) =>
//         this._tasksService.updateTask(Tasks).pipe(
//           map((task) => updateTasks(task)),
//           catchError(() => EMPTY)
//         )
//       )
//     )
//   );

}