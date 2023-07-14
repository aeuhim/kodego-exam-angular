import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment-selector',
  templateUrl: './appointment-selector.component.html',
  styleUrls: ['./appointment-selector.component.scss']
})
export class AppointmentSelectorComponent implements OnInit{

  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    console.warn(this.activatedRoute);
  }
}
