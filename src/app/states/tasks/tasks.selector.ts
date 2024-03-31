import { createSelector } from '@ngrx/store'
import {AppState} from'../app.state'


// ============= for select state to return it ===================
export const selectTaskState = (state:AppState)=>state.task

// ============= make selector for return state by index
// when take parameter (param that i want to take it ) => createSelector (name of return state  , arrow function to return what we need )
export const selectTaskById =(taskIndex:number)=> createSelector(
    selectTaskState,
    (task:any)=>{
        return task[taskIndex]
    }
)