import { Routes } from '@angular/router';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DetailsComponent } from './Pages/details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path:'details/:id',
    component:DetailsComponent
  }
];
