import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorForAngularModule } from '@wangeditor/editor-for-angular';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EditorForAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
