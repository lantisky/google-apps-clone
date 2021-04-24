import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {
// (selectedTabChange)="onTabChanged($event)
//   onTabChanged($event) {
//     switch ( $event.index ) {
//       case 0:
//         break;
//       case 1:
//         break;
//       default:
//         break;
//     }
//   }
  tabNavLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.tabNavLinks = [
      {
        label: 'library',
        link: 'library',
        index: 0
      },
      {
        label: 'bookmark',
        link: 'bookmark',
        index: 1
      },
      {
        label: 'searches',
        link: 'searches',
        index: 2
      }
    ]
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.tabNavLinks.indexOf(this.tabNavLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
