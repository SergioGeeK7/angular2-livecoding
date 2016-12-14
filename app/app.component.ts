import {Component} from '@angular/core';
@Component({
    selector:'my-app',
    template:
    `
        <h2> Contact </h2>
        <my-form (saveContact)="saveContact($event)"> </my-form>
        <my-contact-list [items]="users"> </my-contact-list>
    `
})
export default class AppComponent {
    users:any[] = []
    saveContact(user:any){
        this.users.push(user);
    }
}