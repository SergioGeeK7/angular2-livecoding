import { Directive, ElementRef , Input ,HostListener} from '@angular/core';

@Directive({ 
    selector: '[line-through]'
})
export default class LineThrough{
    constructor(private el: ElementRef){

    }
    @HostListener("click") onClick (){
        this
          .el
          .nativeElement
          .style
          .textDecoration =   this
                                .el
                                .nativeElement
                                .style
                                .textDecoration ? "" : "line-through";
    }
}