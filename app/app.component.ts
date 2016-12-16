import {Component} from '@angular/core';
@Component({
    selector:'my-app',
    template:
    `
        <h2> Todo List </h2>
        <my-form (saveContact)="saveContact($event)"> </my-form>
        <my-contact-list [items]="users" (onDelete)="onDelete($event)"> </my-contact-list>
    `
})
export default class AppComponent {
    users:any[] = []
    saveContact(user:any){
        this.users.push(user);
    }
    onDelete(user:any){
        this.users = this.users.filter(i=> i !== user);
    }
}