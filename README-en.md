# wangEditor for angular

[中文文档](./README.md)

## Introduction

An out-of-the-box angular component
based on the [wangEditor 5](https://www.wangeditor.com/v5/for-frame.html#vue3)

## Installation

```shell
yarn add @wangeditor/editor
yarn add @wangeditor/editor-for-angular@next
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


```ts
  import { EditorForAngularModule } from '@wangeditor/editor-for-angular';
```

```html
    <div style="border-bottom: 1px solid #ccc" wang-toolbar [mode]="mode" [editor]="editorRef">
    </div>
    <div style="height: 400px; overflow-y: hidden" wang-editor [(ngModel)]="valueHtml"
      (ngModelChange)="handleValueChange($event)" [mode]="mode" [defaultConfig]="editorConfig"
      [defaultHtml]="valueHtml" (onCreated)="handleCreated($event)" (onFocus)="handleFocus($event)"
      (onBlur)="handleBlur($event)" (onChange)="handleChange($event)"
      (customPaste)="customPaste($event)" (onDestroyed)="handleDestroyed($event)"> </div>
```

or

```html
    <wang-toolbar style="border-bottom: 1px solid #ccc" [mode]="mode" [editor]="editorRef">
    </wang-toolbar>
    <wang-editor style="height: 400px; overflow-y: hidden" [(ngModel)]="valueHtml"
      (ngModelChange)="handleValueChange($event)" [mode]="mode" [defaultConfig]="editorConfig"
      [defaultHtml]="valueHtml" (onCreated)="handleCreated($event)"
      (onFocus)="handleFocus($event)" (onBlur)="handleBlur($event)"
      (onChange)="handleChange($event)" (customPaste)="customPaste($event)"
      (onDestroyed)="handleDestroyed($event)">
    </wang-editor>
```
