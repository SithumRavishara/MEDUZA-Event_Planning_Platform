import { Component, OnInit } from '@angular/core';
import {DataExchangeService} from '../../service/dataExchange.service';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  Date = '2021-04-01';

  constructor(private dataExchangeService: DataExchangeService) { }

  ngOnInit() {
  }

  // Date = this.dataExchangeService.visitEvent.date;

}
