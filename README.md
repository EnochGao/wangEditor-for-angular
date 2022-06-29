# wangEditor for angular component

[English documentation](./README-en.md)

## 介绍

基于 [wangEditor](https://www.wangeditor.com/) 封装的开箱即用的 angular 组件

[在线示例](https://enochgao.github.io/wangEditor-for-angular/)

## 安装

```shell
npm i @wangeditor/editor
npm i wangeditor-for-angular
或者：
yarn add @wangeditor/editor
yarn add wangeditor-for-angular
```

## 样式引入

angular.json

```json
    "styles": [
      "src/styles.less",
      "node_modules/@wangeditor/editor/dist/css/style.css"
    ],
```

## 使用

module.ts

```ts
  import { EditorForAngularModule } from 'wangeditor-for-angular';
```

html:

```html
  <div [ngStyle]="{'border': '1px solid #ccc'}">
    <div
      [ngStyle]="{'border-bottom': '1px solid #ccc'}"
      wang-toolbar
      [mode]="mode"
      [editor]="editorRef">
    </div>
    <div
      [ngStyle]="{'height': '400px','overflow-y': 'hidden'}"
      wang-editor
      [(ngModel)]="valueHtml"
      [mode]="mode"
      [defaultConfig]="editorConfig"
      [defaultHtml]="valueHtml"
      (ngModelChange)="handleValueChange($event)"
      (onCreated)="handleCreated($event)"
      (onFocus)="handleFocus($event)"
      (onBlur)="handleBlur($event)"
      (onChange)="handleChange($event)"
      (customPaste)="customPaste($event)"
      (onDestroyed)="handleDestroyed($event)">
    </div>
  </div>
```

或者

```html
  <div [ngStyle]="{'border': '1px solid #ccc'}">
    <wang-toolbar
      [ngStyle]="{'border-bottom': '1px solid #ccc'}"
      [mode]="mode"
      [editor]="editorRef">
    </wang-toolbar>
    <wang-editor
      [ngStyle]="{'height': '400px','overflow-y': 'hidden'}"
      [(ngModel)]="valueHtml"
      [mode]="mode"
      [defaultConfig]="editorConfig"
      [defaultHtml]="valueHtml"
      (ngModelChange)="handleValueChange($event)"
      (onCreated)="handleCreated($event)"
      (onFocus)="handleFocus($event)"
      (onBlur)="handleBlur($event)"
      (onChange)="handleChange($event)"
      (customPaste)="customPaste($event)"
      (onDestroyed)="handleDestroyed($event)">
    </wang-editor>
  </div>
```

component.ts:

```ts

import { IDomEditor } from '@wangeditor/editor';
import { AlertType, Mode } from 'wangeditor-for-angular';

export class AppComponent {

  valueHtml = '<p>hello</p>';
  mode: Mode = 'default';

  editorConfig = {
    placeholder: '请输入内容...',
  };

  editorRef!: IDomEditor;

  constructor() {
    setTimeout(() => {
      this.valueHtml = '<p>模拟 Ajax 异步设置内容</p>';
    }, 2000);
  }

  handleCreated(editor: IDomEditor) {
    console.log('created', editor);
    this.editorRef = editor;
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

  customAlert({ info, type }: { info: string, type: AlertType; }) {
    alert(`【customAlert】${type} - ${info}`);
  };

  handleDestroyed(editor: IDomEditor) {
    console.log('destroyed', editor);
  }

  insertText() {
    if (this.editorRef == null) return;
    this.editorRef.insertText('hello world');
  };

  printHtml() {
    if (this.editorRef == null) return;
    console.log(this.editorRef.getHtml());
  };

  customPaste({ editor, event, callback }: any) {
    // 自定义插入内容
    editor.insertText('xxx');
    callback(false); // 返回 false ，阻止默认粘贴行为
    // callback(true) // 返回 true ，继续默认的粘贴行为
  };

}

```
