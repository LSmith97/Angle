import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
    {
        path: '',
        component: IndexComponent,
        title: 'Index Page'
    },
    {
        path: 'posts/:id',
        component: DetailsComponent,
        title: 'Post Details'
    }
]

export default routeConfig;