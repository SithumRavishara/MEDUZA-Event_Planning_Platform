import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-profile-edit',
  templateUrl: './event-profile-edit.component.html',
  styleUrls: ['./event-profile-edit.component.css']
})
export class EventProfileEditComponent implements OnInit {

  toggle: boolean = true;
  isCollapsed = true;

  onClick() {
    this.toggle = !this.toggle;
  }

  constructor() { }

  ngOnInit() {
  }

}
