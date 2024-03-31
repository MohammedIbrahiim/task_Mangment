import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadsModule } from './leads/tasks.module';

//============== for add ngrx to app module ================
import { StoreModule } from '@ngrx/store';
import { tasksReducer}from './states/tasks/tasks.reducer';
// import { TasksEffects}from './states/tasks/tasks.effects';
import { EffectsModule } from '@ngrx/effects'



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LeadsModule,

    // =============== for add reducer at store module =============
    StoreModule.forRoot({task:tasksReducer}),
    // EffectsModule.forRoot([TasksEffects]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
