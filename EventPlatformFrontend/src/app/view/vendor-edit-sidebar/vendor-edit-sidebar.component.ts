import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-edit-sidebar',
  templateUrl: './vendor-edit-sidebar.component.html',
  styleUrls: ['./vendor-edit-sidebar.component.css']
})
export class VendorEditSidebarComponent implements OnInit {

  toggle: boolean = true;
  isCollapsed = true;

  onClick() {
    this.toggle = !this.toggle;
  }

  constructor() { }

  ngOnInit() {
  }

}
