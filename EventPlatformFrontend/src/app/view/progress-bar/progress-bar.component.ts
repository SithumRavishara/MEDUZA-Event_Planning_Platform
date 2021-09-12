import { Component, OnInit } from '@angular/core';
import { ProgressbarConfig } from 'ngx-bootstrap/progressbar';

export function getProgressbarConfig(): ProgressbarConfig {
  return Object.assign(new ProgressbarConfig(), { animate: true, striped: true,  max: 150 });
}

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }]
})
export class ProgressBarComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

}
