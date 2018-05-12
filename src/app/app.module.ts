import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Login1Component } from './component/login1/login1.component';
import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './/app-routing.module';
import { Login2Component } from './login2/login2.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Pic2Component } from './pic2/pic2.component';
import { Pic4Component } from './pic4/pic4.component';
import { Project2Component } from './project2/project2.component';
import { Project3Component } from './project3/project3.component';
import { IssueComponent } from './issue/issue.component';
import { Issue1Component } from './issue1/issue1.component';
import { Issue2Component } from './issue2/issue2.component';
import { UserService } from './shared/user/user.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { PrivateZoneComponent } from './pages/private-zone/private-zone.component';
import { LoginGuard } from './shared/user/login.guard';

import { PublicZoneComponent } from './public-zone/public-zone.component';
@NgModule({
  declarations: [
    AppComponent,
    Login1Component,
    Login2Component,
    HomeComponent,
    Pic2Component,
    Pic4Component,
    Project2Component,
    Project3Component,
    IssueComponent,
    Issue1Component,
    Issue2Component,
    LoginComponent,
    PrivateZoneComponent,
    PublicZoneComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserService , LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
