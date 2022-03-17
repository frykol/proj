import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UserdivComponent } from './userdiv/userdiv.component';
import { NavbarComponent } from './navbar/navbar.component';
import {Router, RouterModule, Routes} from "@angular/router"
import { UseraddComponent } from './useradd/useradd.component';
import { FormsModule } from '@angular/forms';
import { UserprofComponent } from './userprof/userprof.component';

const appRoutes: Routes = [
  {
    path: "users",
    component: UserdivComponent
  },
  {
    path: "adduser",
    component: UseraddComponent
  },
  {
    path: "userprofile/:id",
    component: UserprofComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserdivComponent,
    NavbarComponent,
    UseraddComponent,
    UserprofComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
