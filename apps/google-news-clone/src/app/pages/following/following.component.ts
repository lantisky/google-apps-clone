import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from "@angular/material/tabs";

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {
  onTabChanged($event) {
    switch ( $event.index ) {
      case 0:
        break;
      case 1:
        break;
      default:
        break;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
