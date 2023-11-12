import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // This is needed when using angular forms.
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { BrowserModule } from '@angular/platform-browser'; // Needed when using ngModel.
@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
