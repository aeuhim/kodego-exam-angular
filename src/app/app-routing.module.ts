import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppointmentTypeSelectorComponent } from './appointment-type-selector/appointment-type-selector.component';
import { AppointmentSelectorComponent } from './appointment-selector/appointment-selector.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: AppointmentTypeSelectorComponent},
  {path: 'select-appt/:apptTypeId', component: AppointmentSelectorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
