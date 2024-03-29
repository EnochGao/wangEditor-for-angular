import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDomEditor } from '@wangeditor/editor';
import { AlertType, Mode } from 'wangeditor-for-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  form!: FormGroup;

  disabled = false;
  valueHtml = '<p>hello</p>';
  mode: Mode = 'default';

  default = '<p>哈哈哈哈哈哈</p>';

  // 编辑器相关配置
  editorConfig = {
    placeholder: '请输入内容...',
  };

  editorRef!: IDomEditor;

  constructor(private fb: FormBuilder) {
    setTimeout(() => {
      this.valueHtml = '<p>模拟 Ajax 异步设置内容</p>';
    }, 2000);

    this.form = this.fb.group({
      editor: ['<p>222222222222222222</p>', [Validators.required]],
    });

    // setTimeout(() => {
    //   this.form.get('editor')?.patchValue('<p>测试测试</p>');
    // }, 2000);
  }

  handleCreated(editor: IDomEditor) {
    console.log('created', editor);
    this.editorRef = editor; // 记录 editor 实例，重要！
  }

  handleChange(editor: IDomEditor) {
    console.log('change:', editor);
  }

  handleValueChange(value: string) {
    console.log('value change:', value);
  }

  handleFocus(editor: IDomEditor) {
    console.log('focus', editor);
  }
  handleBlur(editor: IDomEditor) {
    console.log('blur', editor);
  }

  customAlert({ info, type }: { info: string; type: AlertType }) {
    alert(`【自定义提示】${type} - ${info}`);
  }

  handleDestroyed(editor: IDomEditor) {
    console.log('destroyed', editor);
  }

  insertText() {
    if (this.editorRef == null) return;
    this.editorRef.insertText('hello world');
  }

  printHtml() {
    if (this.editorRef == null) return;
    console.log(this.editorRef.getHtml());
  }

  disable() {
    if (this.editorRef == null) return;
    if (this.disabled) {
      this.editorRef.enable();
    } else {
      this.editorRef.disable();
    }
    this.disabled = !this.disabled;
  }

  customPaste({ editor, event, callback }: any) {
    console.log('ClipboardEvent 粘贴事件对象', event);

    // 自定义插入内容
    editor.insertText('xxx');
    callback(false); // 返回 false ，阻止默认粘贴行为
    // callback(true) // 返回 true ，继续默认的粘贴行为
  }
}
