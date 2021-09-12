import { Component, OnInit } from '@angular/core';
import {DataExchangeService} from "../../service/dataExchange.service";
import {EventService} from "../../service/event.service";
import {Router} from "@angular/router";
// import { url } from 'inspector';

@Component({
  selector: 'app-planner-block',
  templateUrl: './planner-block.component.html',
  styleUrls: ['./planner-block.component.css']
})
export class PlannerBlockComponent implements OnInit {

  // eventid : Number = 0;
  servers: PlannerEvent[] = [];
  rowid : number = 0;
  private eventid: number = 0;
  private i: number = 0;
  idNumber : Number = 10;
  events: any;

  constructor(private dataExchangeService: DataExchangeService, private eventService: EventService,
              private router: Router) {
   }

  ngOnInit() {
    this.events = this.dataExchangeService.plannerEvent;
    this.loadEvents();
  }

  isCollapsed = true;
  // message: String = "Wedding Palan 2019";
  icon: String;
  icon2: String = "./../../../assets/Images/delete.png";


  loadEvents() {
    for (let i = 0; i < this.events.length; i++) {
      this.servers.push(this.events[i]);
    }
  }

  collapsed(): void {
    this.icon = "./../../../assets/Images/down.png";
  }

  expanded(): void {
    this.icon = "./../../../assets/Images/up.png";
  }

  public add() {
    this.eventid = this.eventid + 1;
  }

  onAdd() {
    // this.servers.push(this.eventid);
  }

  visitEvent(event) {
    console.log('ev', event);
    this.dataExchangeService.visitEvent = event;
    this.router.navigateByUrl('/evnt-planner-view');
  }

  onRemove(event) {
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i].event_id == event.event_id) {
        this.events.splice(event);
      }
    }
    this.loadEvents();
    this.eventService.deleteEvent(event.event_id).subscribe(
      data => {
        console.log('done');
      }, error => {
        console.log('error');
      }
    );
  }

}
