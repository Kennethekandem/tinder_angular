import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BlankComponent} from "./components/layouts/blank/blank.component";
import {WelcomeComponent} from "./components/pages/welcome/welcome.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {DefaultComponent} from "./components/layouts/default/default.component";
import {AuthGuard} from "./guard/auth.guard";
import {HomeComponent} from "./components/pages/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent
      }
    ]
  },
  {
    path: 'home',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
