import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { DetailsComponent } from './pages/details/details.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
const routeConfig: Routes = [
  {
    path: '',
    component: IndexComponent,
    title: 'Index Page',
  },
  {
    path: 'posts/new',
    component: NewPostComponent,
    title: 'New Post',
  },
  {
    path: 'posts/:id',
    component: DetailsComponent,
    title: 'Post Details',
  },
 
];

export default routeConfig;
