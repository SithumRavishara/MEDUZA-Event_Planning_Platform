import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.css']
})
export class DiscoverPageComponent implements OnInit {

 Topic : String = 'Meetup';
 description : String = 'Hello this is the meetup.';
//  eventImage = "";
 miniTopic : String = "Heart Care Center";
 idNumber : Number = 10;
 servers : Number[] = [10, 20]
 para : String = " .";

  constructor() {
    this.idNumber = Math.random();
   }

  ngOnInit() {
  }

  onSort(){
    this.Topic ='Conference';
    this.description = 'hello this the conference';
    this.miniTopic = 'Sccesfulluy.';
    this.para = "Done..!"
    this.servers.push(this.idNumber);
  }

}
