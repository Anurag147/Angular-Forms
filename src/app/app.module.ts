import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormBasicComponent } from './form-basic/form-basic.component';
import { FormAssignmentComponent } from './form-assignment/form-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBasicComponent,
    FormAssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
