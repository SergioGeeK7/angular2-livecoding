import { NgModule }from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import AppComponent  from './app.component'
import FormComponent from './form.component'
import contactListComponent from './list-contact.component'
import lineThrough from './line-through'
import colorPicker from './color-picker.component'


@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[AppComponent, FormComponent,contactListComponent,lineThrough, colorPicker],
    bootstrap:[AppComponent]
})
export default class AppModule {

}