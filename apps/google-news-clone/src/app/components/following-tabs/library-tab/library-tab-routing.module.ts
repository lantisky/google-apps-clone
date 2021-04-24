import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryTabComponent } from './library-tab.component';

const routes: Routes = [
  { path: '', component: LibraryTabComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class LibraryTabRoutingModule { }
