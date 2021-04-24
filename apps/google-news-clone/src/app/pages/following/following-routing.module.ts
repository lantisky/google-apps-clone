import { Route } from '@angular/router';
import { FollowingComponent } from './following.component';
export const FOLLOWING_ROUTE: Route = {
  path: 'following',
  component: FollowingComponent,
  children: [
    {
      path: 'library',
      loadChildren: () => import('../../components/following-tabs/library-tab/library-tab.module').then(m => m.LibraryTabModule)
    },
    {
      path: 'bookmark',
      loadChildren: () => import('../../components/following-tabs/bookmark-tab/bookmark-tab.module').then(m => m.BookmarkTabModule)
    },
    {
      path: 'searches',
      loadChildren: () => import('../../components/following-tabs/searches-tab/searches-tab.module').then(m => m.SearchesTabModule)
    },
  ]
};
