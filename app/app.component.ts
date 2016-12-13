import {Component} from '@angular/core';
@Component({
    selector:'my-app',
    template:
    `
    <h2> Oes </h2>
    <my-form [user]="user"> </my-form>
    <my-contact-list [items]="users"> </my-contact-list>
    `
})
export default class AppComponent {
    user = {name:"",tel:""}
    users = [{name:"sdf",tel:"123"},{name:"123",tel:"1231"}]
}