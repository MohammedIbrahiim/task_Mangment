import { createSelector } from '@ngrx/store'
import {AppState} from'../app.state'

export const selectTaskState = (state:AppState)=>state.tasks
export const selectTask = createSelector(
    selectTaskState,
    (state)=>state.tasks
)