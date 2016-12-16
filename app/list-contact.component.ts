import {Component,Input,Output,EventEmitter} from '@angular/core'
@Component({
    selector: 'my-contact-list',
    moduleId: module.id,
    templateUrl: 'list-contact.component.html'
})
export default class ContactListComponent {
    @Output() onDelete:EventEmitter<any> = new EventEmitter();
    @Input() items:any[]
    onItemDblclick(item:any){
       this.onDelete.emit(item);
    }
}