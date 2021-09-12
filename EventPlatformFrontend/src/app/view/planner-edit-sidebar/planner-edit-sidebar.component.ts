import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner-edit-sidebar',
  templateUrl: './planner-edit-sidebar.component.html',
  styleUrls: ['./planner-edit-sidebar.component.css']
})
export class PlannerEditSidebarComponent implements OnInit {

  toggle: boolean = true;
  isCollapsed = true;

  onClick() {
    this.toggle = !this.toggle;
  }

  constructor() { }

  ngOnInit() {
  }

}
