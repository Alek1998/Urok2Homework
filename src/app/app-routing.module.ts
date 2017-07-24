import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {
  AdminComponent,
  HomeComponent,
} from './index';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'admin', component: AdminComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}
