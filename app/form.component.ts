import {Component,Input,EventEmitter,Output} from '@angular/core'
@Component({
    selector:'my-form',
    templateUrl:'form.component.html',
    moduleId: module.id
})
export default class ContactFormComponent {
    @Output() saveContact = new EventEmitter();
    save(name:any, tel:any){
        this.saveContact.emit({name,tel})
    }
}