import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-box',
  templateUrl: './dynamic-box.component.html',
  styleUrls: ['./dynamic-box.component.css']
})
export class DynamicBoxComponent implements OnInit {

//   Topic : String = 'Meetup';
//  description : String = 'Hello this is the meetup.';
// //  eventImage = "";
//  miniTopic : String = "Heart Care Center";
//  idNumber : Number = 10;
//  servers : Number[] = [10, 20]
//  para : String = " .";


 servers : number[] = [1];
  rowid : number = 0;
  private eventid: number = 0
  private i: number = 0;
  idNumber : Number = 10;

  isCollapsed = true;
  message: String = "Social Medial and Publicity Task";
  vendor1 : any = "TV Derena";
  vendor2 : any = "Sirasa TV";
  vendor3 : any = "Sunday Times";
  vendor4 : any = "The Morning";
  icon: String;
  icon2: String = "./../../../assets/Images/delete.png";
  icon3: String ="./../../../assets/Images/edit.png";

  constructor() {
    this.idNumber = Math.random();
   }

  ngOnInit() {
  }

  // onSort(){
  //   this.Topic ='Conference';
  //   this.description = 'hello this the conference';
  //   this.miniTopic = 'Sccesfulluy.';
  //   this.para = "Done..!"
  //   this.servers.push(this.idNumber);
  // }

  collapsed(): void {
    this.icon = "./../../../assets/Images/down.png";
  }

  expanded(): void {
    this.icon = "./../../../assets/Images/up.png";
  }

}
