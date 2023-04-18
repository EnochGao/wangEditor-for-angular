import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  createToolbar,
  DomEditor,
  IDomEditor,
  IToolbarConfig,
  Toolbar,
} from '@wangeditor/editor';
import { Mode } from '../type';

@Directive({
  selector: 'wang-toolbar,[wang-toolbar]',
  exportAs: 'wangToolbar',
  host: {
    style: 'display:block',
  },
})
export class ToolbarComponent implements OnInit, OnChanges, OnDestroy {
  @Input() mode: Mode = 'default';
  @Input() editor!: IDomEditor;
  @Input() defaultConfig: Partial<IToolbarConfig> = {};

  toolbar!: Toolbar;

  constructor(private toolbarRef: ElementRef) {}

  ngOnInit(): void {
    this.initToolbar();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editor'] && !changes['editor'].isFirstChange()) {
      this.initToolbar();
    }
  }

  private initToolbar() {
    if (!this.toolbarRef) return;
    if (!this.editor) {
      throw new Error(
        'Not found instance of Editor when create <Toolbar/> component'
      );
    }
    if (DomEditor.getToolbar(this.editor)) return; // 不重复创建
    this.toolbar = createToolbar({
      editor: this.editor,
      selector: this.toolbarRef.nativeElement || '<div></div>',
      mode: this.mode,
      config: this.defaultConfig,
    });
  }

  ngOnDestroy(): void {
    if (this.toolbar) {
      this.toolbar.destroy();
    }
  }
}
