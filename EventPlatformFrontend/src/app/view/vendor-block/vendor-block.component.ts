import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-block',
  templateUrl: './vendor-block.component.html',
  styleUrls: ['./vendor-block.component.css']
})
export class VendorBlockComponent implements OnInit {

  servers : number[] = [1];
  rowid : number = 0;
  private eventid: number = 0
  private i: number = 0;
  idNumber : Number = 10;


  constructor() { }

  ngOnInit() {
  }

  isCollapsed = true;
  message: String = "Wedding Palan 2019";
  telephone: any = "0716666904"
  address: any = "444,Galle road,Beruwala,Hettimulla."
  icon: String;
  icon2: String = "./../../../assets/Images/delete.png";

  // fb_link: String ="";
  // inst_link
  // linkd_link
  // whts_link
  
  collapsed(): void {
    this.icon = "./../../../assets/Images/down.png";
  }
 
  expanded(): void {
    this.icon = "./../../../assets/Images/up.png";
  }

  public add() {
    this.eventid = this.eventid + 1;
    }

  onAdd(){
    this.servers.push(this.eventid);
  }

  // onRemove(){
  //   this.servers.();
  // }
    

}
