import { Component, OnInit,HostListener, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import {EventService} from '../../service/event.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from "@angular/router";
import {DataExchangeService} from "../../service/dataExchange.service";

@Component({
  selector: 'app-event-edit-form',
  templateUrl: './event-edit-form.component.html',
  styleUrls: ['./event-edit-form.component.css']
})
export class EventEditFormComponent implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective;

  @HostListener('window:scroll')
  onScrollEvent() {
    this.datepicker.hide();
  }

  private event_type: any;

  eventForm = new FormGroup({
    e_name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    date: new FormControl('', [Validators.required]),
    e_type: new FormControl('', [Validators.required]),
  });

  foods: Food[] = [
    {value: 'conference', viewValue: 'Conference'},
    {value: 'meetup', viewValue: 'Meetup'},
    {value: 'congress', viewValue: 'Congress'},
    {value: 'wedding', viewValue: 'Wedding'},
    {value: 'birthday party', viewValue: 'Birthday Party'},
    {value: 'pirith Ceremony', viewValue: 'Pirith Ceremony'},
    {value: 'outdoor party', viewValue: 'Outdoor Party'}
  ];


  constructor(private eventService: EventService, private snackBar: MatSnackBar,
              private router: Router, private dataExchangeService: DataExchangeService) { }

  ngOnInit() {
  }

  send: SendModel = {
    e_name: '',
    e_description: '',
    e_type: '',
    date: '',
  }

  getOptionValue(value) {
    this.event_type = value.value;
  }

  assignValuesForTheSendModel(event) {
    this.send.e_description = event.value.description;
    this.send.e_type = this.event_type;
    this.send.e_name = event.value.e_name;
    this.send.date = event.value.date;
  }

  savePlanner(eventform): void {
    console.log(eventform);
    this.assignValuesForTheSendModel(eventform);
    console.log('prof save', this.send);
    if (eventform.valid) {
    this.eventService.saveEvent(this.send).subscribe(
        data => {
          this.openSnackBar('Event Data Saved!');
          this.dataExchangeService.plannerEvent.push(data);
          console.log('success!');
          console.log(this.dataExchangeService.plannerEvent);
          this.router.navigateByUrl('/plannerprofile');
        },
        error => {
          this.openSnackBar('Error Occurred!');
        }
      );
    }
  }

  openSnackBar(message) {
    this.snackBar.open(message, 'Cancel', {
      duration: 500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

}

interface Food {
  value: string;
  viewValue: string;
}

export class SendModel {
  e_description: any;
  e_name: any;
  date: any;
  e_type: any;
}
