import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-vendor',
  templateUrl: './sidebar-vendor.component.html',
  styleUrls: ['./sidebar-vendor.component.css']
})
export class SidebarVendorComponent implements OnInit {

  toggle: boolean = true;
  isCollapsed = true;

  onClick() {
    this.toggle = !this.toggle;
  }

  constructor() { }

  ngOnInit() {
  }

}
