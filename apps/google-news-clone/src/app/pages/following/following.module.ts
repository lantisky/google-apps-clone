import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FOLLOWING_ROUTE } from './following-routing.module';
import { FollowingComponent } from './following.component';
import { MatTabsModule } from "@angular/material/tabs";
import { BookmarkTabModule } from "../../components/following-tabs/bookmark-tab/bookmark-tab.module";
import { LibraryTabModule } from "../../components/following-tabs/library-tab/library-tab.module";
import { SearchesTabModule } from "../../components/following-tabs/searches-tab/searches-tab.module";


@NgModule({
  imports: [
    BookmarkTabModule,
    LibraryTabModule,
    SearchesTabModule,
    CommonModule,
    RouterModule.forChild([FOLLOWING_ROUTE]),
    MatTabsModule
  ],
  declarations: [FollowingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FollowingModule {
}
