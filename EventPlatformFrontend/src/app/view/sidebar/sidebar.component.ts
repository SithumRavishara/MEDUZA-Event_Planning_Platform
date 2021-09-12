import { Component, OnInit } from '@angular/core';
import {DataExchangeService} from "../../service/dataExchange.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  toggle: boolean = true;
  isCollapsed = true;
  events = true;
  eventArray: any;

  onClick() {
    this.toggle = !this.toggle;
  }

  constructor(private dataExchangeService: DataExchangeService) {
    this.eventArray = this.dataExchangeService.plannerEvent;
  }


  ngOnInit() {
  }

}
