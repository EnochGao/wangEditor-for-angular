import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EditorForAngularModule } from 'wangeditor-for-angular';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EditorForAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
