import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadsModule } from './leads/tasks.module';
import { StoreModule } from '@ngrx/store';
// import { todoReducer}from './states/tasks/tasks.reducer';
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
    StoreModule.forRoot(),
    // EffectsModule.forRoot([TasksEffects]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
