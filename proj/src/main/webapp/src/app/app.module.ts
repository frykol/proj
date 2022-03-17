import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UserdivComponent } from './userdiv/userdiv.component';
import { NavbarComponent } from './navbar/navbar.component';
import {Router, RouterModule, Routes} from "@angular/router"
import { UseraddComponent } from './useradd/useradd.component';

const appRoutes: Routes = [
  {
    path: "users",
    component: UserdivComponent
  },
  {
    path: "adduser",
    component: UseraddComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserdivComponent,
    NavbarComponent,
    UseraddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
