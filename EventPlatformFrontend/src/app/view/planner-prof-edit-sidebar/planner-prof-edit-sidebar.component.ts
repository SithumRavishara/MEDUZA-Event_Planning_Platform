import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner-prof-edit-sidebar',
  templateUrl: './planner-prof-edit-sidebar.component.html',
  styleUrls: ['./planner-prof-edit-sidebar.component.css']
})
export class PlannerProfEditSidebarComponent implements OnInit {

  toggle: boolean = true;
  isCollapsed = true;
  editable = !false;

  onClick() {
    this.toggle = !this.toggle;
  }

  constructor() { }

  ngOnInit() {
  }

}
