import {Component,Input} from '@angular/core'
@Component({
    selector:'my-form',
    templateUrl:'form.component.html',
    moduleId: module.id
})
export default class ContactFormComponent {
    @Input() user:any
    save(name:any, tel:any){
        this.user.name = "name";
        this.user.tel = "tel";
    }
}