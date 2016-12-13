import {Component,Input} from '@angular/core'
@Component({
    selector: 'my-contact-list',
    moduleId: module.id,
    templateUrl: 'list-contact.component.html'
})
export default class ContactListComponent {
    @Input() items:any
}