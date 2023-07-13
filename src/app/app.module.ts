import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentTypeSelectorComponent } from './appointment-type-selector/appointment-type-selector.component';
import { AppointmentSelectorComponent } from './appointment-selector/appointment-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentTypeSelectorComponent,
    AppointmentSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
