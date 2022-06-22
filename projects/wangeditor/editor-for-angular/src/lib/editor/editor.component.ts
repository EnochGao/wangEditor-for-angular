import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { createEditor, IDomEditor, IEditorConfig, SlateDescendant } from '@wangeditor/editor';

export function genErrorInfo(fnName: string): string {
  let info = `请使用 '(${fnName})=' 事件!`;
  info += `\nPlease use '(${fnName})' event!`;
  return info;
}
@Component({
  selector: 'wang-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less'],
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
  @Input() mode: 'simple' | 'default' = 'default';
  @Input() defaultContent: SlateDescendant[] = [];
  @Input() defaultHtml: string = '';
  @Input() defaultConfig: Partial<IEditorConfig> = {};

  @Output() onCreated = new EventEmitter();
  @Output() onDestroyed = new EventEmitter();
  @Output() onMaxLength = new EventEmitter();
  @Output() onFocus = new EventEmitter();
  @Output() onBlur = new EventEmitter();
  @Output() customAlert = new EventEmitter();
  @Output() customPaste = new EventEmitter();

  editor!: IDomEditor;

  private propagateChange = (_: any) => { };

  @ViewChild('box') private editorRef!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const that = this;

    createEditor({
      selector: this.editorRef.nativeElement,
      mode: this.mode,
      content: this.defaultContent || [],
      html: this.defaultHtml || '',
      config: {
        ...this.defaultConfig,
        onCreated(editor) {
          that.editor = editor; // 记录 editor 实例
          that.onCreated.emit(editor);
          if (that.defaultConfig.onCreated) {
            const info = genErrorInfo('onCreated');
            throw new Error(info);
          }
        },
        onChange(editor) {
          const editorHtml = editor.getHtml();
          // curValue.value = editorHtml; // 记录当前内容
          that.propagateChange(editorHtml);

          if (that.defaultConfig.onChange) {
            const info = genErrorInfo('ngModelChange');
            throw new Error(info);
          }
        },
        onDestroyed(editor) {
          that.onDestroyed.emit(editor);
          if (that.defaultConfig.onDestroyed) {
            const info = genErrorInfo('onDestroyed');
            throw new Error(info);
          }
        },
        onMaxLength(editor) {
          that.onMaxLength.emit(editor);
          if (that.defaultConfig.onMaxLength) {
            const info = genErrorInfo('onMaxLength');
            throw new Error(info);
          }
        },
        onFocus(editor) {
          that.onFocus.emit(editor);
          if (that.defaultConfig.onFocus) {
            const info = genErrorInfo('onFocus');
            throw new Error(info);
          }
        },
        onBlur(editor) {
          that.onBlur.emit(editor);
          if (that.defaultConfig.onBlur) {
            const info = genErrorInfo('onBlur');
            throw new Error(info);
          }
        },
        customAlert(info, type) {
          that.customAlert.emit({ info, type });
          if (that.defaultConfig.customAlert) {
            const info = genErrorInfo('customAlert');
            throw new Error(info);
          }
        },
        customPaste: (editor, event): any => {
          if (that.defaultConfig.customPaste) {
            const info = genErrorInfo('customPaste');
            throw new Error(info);
          }
          let res;
          that.customPaste.emit(
            {
              editor,
              event,
              fn: (val: boolean) => {
                res = val;
              }
            }
          );
          return res;
        },
      }
    });
  }

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }

  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }

  registerOnTouched(fn: any): void {
    this.propagateChange = fn;
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
