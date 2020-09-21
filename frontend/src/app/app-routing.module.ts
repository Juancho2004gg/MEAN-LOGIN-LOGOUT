import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/signup/signup.component';
import { SigninComponent} from './user/signin/signin.component';
import { UserProfileComponent } from './user-profile/user-profile.component'
const appRoutes: Routes = [
  {
      path: 'signup', component: UserComponent,
      children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SigninComponent }]
  },
  {
    path: 'signup', component: UserProfileComponent
},
  {
      path: '', redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
