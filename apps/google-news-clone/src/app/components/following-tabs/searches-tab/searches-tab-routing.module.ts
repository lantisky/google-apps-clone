import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchesTabComponent } from './searches-tab.component';

const routes: Routes = [
  { path: '', component: SearchesTabComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class SearchesTabRoutingModule { }
