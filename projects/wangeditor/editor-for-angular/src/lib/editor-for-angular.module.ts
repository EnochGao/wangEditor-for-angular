import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
    EditorComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EditorComponent,
    ToolbarComponent
  ]
})
export class EditorForAngularModule { }
