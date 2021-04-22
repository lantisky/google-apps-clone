import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-tab',
  templateUrl: './library-tab.component.html',
  styleUrls: ['./library-tab.component.scss']
})
export class LibraryTabComponent implements OnInit {
  imgList = {
    name: 'img',
    fields: [
      {val: "https://lh3.googleusercontent.com/tFGfZ19wiRAvJsi5LeFL42_k_gV7bXV6dj3aKnatkcPRWKpu2fHUp367Awcdd7JceiE_bzBc=-rw"}
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
