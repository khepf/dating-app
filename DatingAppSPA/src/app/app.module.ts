import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { from } from 'rxjs';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      CommonModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
