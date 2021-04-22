import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark-tab',
  templateUrl: './bookmark-tab.component.html',
  styleUrls: ['./bookmark-tab.component.scss']
})
export class BookmarkTabComponent implements OnInit {
  saveStoryImg = 'https://lh3.googleusercontent.com/7Iv4pkYA_hqsvlyo6XNy3UU0tUYgBR9rGrDHekm8-6cHO14jbUrOu8dCU86to2kzYoRVHJn0Ow=-rw';
  constructor() { }

  ngOnInit(): void {
  }

}
