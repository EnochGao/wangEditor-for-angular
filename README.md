# wangEditor for angular component

[English documentation](./README-en.md)

## 介绍

基于 [wangEditor](https://www.wangeditor.com/) 封装的开箱即用的 angular 组件

## 安装

```shell
yarn add @wangeditor/editor
yarn add @wangeditor/editor-for-angular@next
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

或者

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
