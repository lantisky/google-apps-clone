import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkTabComponent } from './bookmark-tab.component';

const routes: Routes = [
  { path: '', component: BookmarkTabComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class BookmarkTabRoutingModule { }
