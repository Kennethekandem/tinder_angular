import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BlankComponent} from "./components/layouts/blank/blank.component";
import {WelcomeComponent} from "./components/pages/welcome/welcome.component";
import {LoginComponent} from "./components/auth/login/login.component";

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
    path: 'auth',
    component: BlankComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
