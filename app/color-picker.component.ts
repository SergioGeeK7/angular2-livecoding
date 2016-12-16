import {Component,EventEmitter,Output }from '@angular/core'
@Component({
    selector:'color-picker',
    moduleId:module.id,
    templateUrl:'color-picker.component.html',
    styles:[`
    .color{
        width:24px;
        height:24px;
        display:inline-block;
        border-radius:100%;
        text-align:center;
    }
    
    `]
})
export default class ColorPicker {
    colors:string[]=["black","red","yellow","blue","white"]
    @Output() selectedColor:EventEmitter<string> = new EventEmitter()
    onSelected(color:string){
        this.selectedColor.emit(color);
    }
}