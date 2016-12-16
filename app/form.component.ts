import {Component,Input,EventEmitter,Output} from '@angular/core'
@Component({
    selector:'my-form',
    templateUrl:'form.component.html',
    moduleId: module.id
})
export default class ContactFormComponent {
    @Output() saveContact = new EventEmitter();
    color:string
    save(name:any, tel:any){
        const color = this.color;
        this.saveContact.emit({name,tel,color});
    }
    selectedColor(color:string){
        this.color = color;
    }
}