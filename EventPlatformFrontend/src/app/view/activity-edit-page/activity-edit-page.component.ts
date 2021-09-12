import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-edit-page',
  templateUrl: './activity-edit-page.component.html',
  styleUrls: ['./activity-edit-page.component.css']
})
export class ActivityEditPageComponent implements OnInit {

  toggle: boolean = true;
  isCollapsed = true;

  onClick() {
    this.toggle = !this.toggle;
  }

  constructor() { }

  ngOnInit() {
  }

}
