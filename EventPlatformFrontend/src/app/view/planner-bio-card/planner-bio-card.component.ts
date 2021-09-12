import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner-bio-card',
  templateUrl: './planner-bio-card.component.html',
  styleUrls: ['./planner-bio-card.component.css']
})
export class PlannerBioCardComponent implements OnInit {

  Name: String = "Sithum Ravishara";
  Heading: String = "Student at Sabaragamuwa University of Sri Lanka";

  constructor() { }

  ngOnInit() {
  }

}
