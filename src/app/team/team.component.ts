import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  CEO:any = "../assets/network.jpg";
  ceo:any = "https://s3.amazonaws.com/personalbucketdoc/Profile_land.jpg";

  constructor() { }

  ngOnInit() {
  }

}
