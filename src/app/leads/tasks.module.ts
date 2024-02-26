import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { taskRoutingModule } from './tasks-routing.module';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AllTasksComponent
  ],
  imports: [
    CommonModule,
    taskRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LeadsModule { }
