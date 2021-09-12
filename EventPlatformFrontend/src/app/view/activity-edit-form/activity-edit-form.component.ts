import { Component, OnInit ,HostListener, ViewChild  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-activity-edit-form',
  templateUrl: './activity-edit-form.component.html',
  styleUrls: ['./activity-edit-form.component.css']
})
export class ActivityEditFormComponent implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective;

  @HostListener('window:scroll')
  onScrollEvent() {
    this.datepicker.hide();
  }

  constructor() { }

  ngOnInit() {
  }

}
