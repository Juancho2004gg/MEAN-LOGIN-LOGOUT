import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from '../app/shared/user.service'

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AuthGuard } from './auth/auth.guard'
import { AuthInterceptor } from './auth/auth.interceptor'
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SigninComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
