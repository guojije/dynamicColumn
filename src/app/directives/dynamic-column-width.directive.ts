import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDynamicColumnWidth]'
})
export class DynamicColumnWidthDirective {
  public elem = null;
  public mouseDown: boolean = false;
  public oldX: number = 0;
  public oldWidth: number = 0;
  public width: number = 0;

  constructor(private el: ElementRef) {
    console.log("构造函数中");
    
  }

  ngOnInit(): void {
   
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(e) {
    // 判断当前点击的是否是单元格元素
    if (this.el != null) {
      if (e.offsetX > this.el.nativeElement.offsetWidth - 15) {
        this.el.nativeElement.mouseDown = true;
        this.el.nativeElement.oldX = e.x;
        this.el.nativeElement.oldWidth = this.el.nativeElement.offsetWidth;
      }
    } else {
      // Do-nothing
    }
  }



  @HostListener('mouseup', ['$event'])
  onMouseup(e) {
    if (this.el != null) {
      this.el.nativeElement.mouseDown = false;
      this.el.nativeElement.style.cursor = 'default';
    }
  }



  @HostListener('mousemove', ['$event'])
  onMousemove(e) {
    if(this.el != null){
      if (e.offsetX > this.el.nativeElement.offsetWidth - 15) {
        this.el.nativeElement.style.cursor = 'col-resize';
      } else {
        this.el.nativeElement.style.cursor = 'default';
      }
    }

    if (this.el.nativeElement.mouseDown != null && this.el.nativeElement.mouseDown == true) {
      this.el.nativeElement.style.cursor = 'default';
      let wid = 0;
      if (this.el.nativeElement.oldWidth + (e.x - this.el.nativeElement.oldX) > 0) {
        wid = this.el.nativeElement.oldWidth + (e.x - this.el.nativeElement.oldX);
      }
      this.el.nativeElement.style.width = wid + 'px';
      this.el.nativeElement.style.cursor = 'col-resize';
      // ng-zorro table 列宽可以根据thead每个单元格的宽度自动适配，所以不用再做修改
    } else {
      // console.log("无所谓!");
    }
  }
}
