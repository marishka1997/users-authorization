import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Route[] = [
  {
    path: '',
    component: UsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {

}
