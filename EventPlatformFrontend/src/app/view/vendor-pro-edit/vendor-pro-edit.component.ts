import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-pro-edit',
  templateUrl: './vendor-pro-edit.component.html',
  styleUrls: ['./vendor-pro-edit.component.css']
})
export class VendorProEditComponent implements OnInit {

  toggle: boolean = true;
  isCollapsed = true;

  onClick() {
    this.toggle = !this.toggle;
  }

  constructor() { }

  ngOnInit() {
  }

}
