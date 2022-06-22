import { AfterViewInit, ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IEditorConfig } from '@wangeditor/editor';

@Component({
  selector: 'wang-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditorComponent),
      multi: true
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorComponent implements OnInit, AfterViewInit, ControlValueAccessor, OnDestroy {

  @Input() get editorConfig(): Partial<IEditorConfig> {
    return this.defaultEditorConfig;
  };

  set editorConfig(config: Partial<IEditorConfig>) {
    this.defaultEditorConfig = {
      ...this.defaultEditorConfig,
      ...config
    };
  }

  private defaultEditorConfig: Partial<IEditorConfig> = {
    MENU_CONF: {}
  };

  private propagateChange = (_: any) => { };

  constructor() { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
