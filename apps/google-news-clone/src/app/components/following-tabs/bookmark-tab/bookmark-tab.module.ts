import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkTabRoutingModule } from "./bookmark-tab-routing.module";
import { MatTabsModule } from "@angular/material/tabs";
import { BookmarkTabComponent } from "./bookmark-tab.component";


@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    BookmarkTabRoutingModule,
  ],
  declarations: [BookmarkTabComponent],
  exports: [BookmarkTabComponent],
})
export class BookmarkTabModule { }
