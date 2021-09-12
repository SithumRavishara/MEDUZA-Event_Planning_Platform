import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packagebox',
  templateUrl: './packagebox.component.html',
  styleUrls: ['./packagebox.component.css']
})
export class PackageboxComponent implements OnInit {

  servers : number[] = [1];
  rowid : number = 0;
  private eventid: number = 0
  private i: number = 0;
  idNumber : Number = 10;

  isCollapsed = true;
  message: String = "Package Heading";
  price1 : any = "00.00";
  price2 : any = "00.00"
  icon: String;
  icon2: String = "./../../../assets/Images/delete.png";

  constructor() { }

  ngOnInit() {
  }

  collapsed(): void {
    this.icon = "./../../../assets/Images/down.png";
  }

  expanded(): void {
    this.icon = "./../../../assets/Images/up.png";
  }

}
