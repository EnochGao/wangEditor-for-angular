# wangEditor for angular

[中文文档](./README.md)

## Introduction

An out-of-the-box angular component
based on the [wangEditor 5](https://www.wangeditor.com/v5/for-frame.html#vue3)

[Online Demo](https://enochgao.github.io/wangEditor-for-angular/)

## Installation

```shell
npm i @wangeditor/editor
npm i wangeditor-for-angular
```
or:
```shell
yarn add @wangeditor/editor
yarn add wangeditor-for-angular
```

## style

angular.json

```json
    "styles": [
      "src/styles.less",
      "node_modules/@wangeditor/editor/dist/css/style.css"
    ],
```

## Usage

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

or

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
    placeholder: 'Please enter the content...',
  };

  editorRef!: IDomEditor;

  constructor() {
    setTimeout(() => {
      this.valueHtml = '<p>Simulates Ajax asynchronous setup content</p>';
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
    // Custom insert content
    editor.insertText('xxx');
    callback(false); // Return false to prevent the default paste behavior
    // callback(true) // Return true to continue the default paste behavior
  };

}

```
