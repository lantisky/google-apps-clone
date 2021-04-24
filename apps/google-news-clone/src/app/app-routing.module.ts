import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopStoriesComponent } from './pages/top-stories/top-stories.component';
import { FollowingComponent } from './pages/following/following.component';
import { ForYouComponent } from './pages/for-you/for-you.component';
import { CovidComponent } from './pages/covid/covid.component';
import { NewZealandComponent } from "./pages/new-zealand/new-zealand.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'top-stories',
    pathMatch: 'full'
  },
  {
    path: 'top-stories',
    component: TopStoriesComponent,
  },
  {
    path: 'for-you',
    component: ForYouComponent,
  },
  {
    path: 'following',
    component: FollowingComponent,
  },
  {
    path: 'covid-19',
    component: CovidComponent,
  },
  {
    path: 'new-zealand',
    component: NewZealandComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
