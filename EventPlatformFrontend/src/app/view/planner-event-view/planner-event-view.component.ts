import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner-event-view',
  templateUrl: './planner-event-view.component.html',
  styleUrls: ['./planner-event-view.component.css']
})
export class PlannerEventViewComponent implements OnInit {

  toggle: boolean = true;
  isCollapsed = true;

  onClick() {
    this.toggle = !this.toggle;
  }

  constructor() { }

  ngOnInit() {
  }

}
