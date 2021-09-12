import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-viewer',
  templateUrl: './people-viewer.component.html',
  styleUrls: ['./people-viewer.component.css']
})

export class PeopleViewerComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

  itemsPerSlide = 5;

  slides = [
    {image: 'assets/Images/lady.jpg'},
    {image: 'assets/Images/boss.jpg'},
    {image: 'assets/Images/te1.jpg'},
    {image: 'assets/Images/te2.png'},
    {image: 'assets/Images/te3.jpg'},
    {image: 'assets/Images/te4.gif'}
  ];

}
