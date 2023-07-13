import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-type-selector',
  templateUrl: './appointment-type-selector.component.html',
  styleUrls: ['./appointment-type-selector.component.scss']
})
export class AppointmentTypeSelectorComponent {
  private router = inject(Router);

  selectApptType() {
    this.router.navigate(['/select-appt/test']);
  }
}
