import { Component, OnInit } from '@angular/core';
import {DataExchangeService} from "../../service/dataExchange.service";

@Component({
  selector: 'app-eventviewer-page',
  templateUrl: './eventviewer-page.component.html',
  styleUrls: ['./eventviewer-page.component.css']
})
export class EventviewerPageComponent implements OnInit {

  Name: any = "Techno Meetup";
  Heading: any = "BionInformatics meetup in Sabaragamuwa University of Sri Lanka";


  constructor(private dataExchangeService: DataExchangeService) { }

  ngOnInit() {
  }

  // meka anthimata uncomment krnna
  // Name: String = this.dataExchangeService.visitEvent.e_name;
  // Heading: String = this.dataExchangeService.visitEvent.e_description;

}
