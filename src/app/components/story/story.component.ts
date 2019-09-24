import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zerund',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  public screenSize = window.innerWidth;
  constructor() { }

  ngOnInit() {
  }

}
