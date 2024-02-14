import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeNavBarComponent } from './home-nav-bar/home-nav-bar.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { EmployeeDisplayComponent } from './employee-display/employee-display.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AccountDisplayComponent } from './account-display/account-display.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TimedisplayComponent } from './timedisplay/timedisplay.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,

    HomePageComponent,
    LoginPageComponent,
    HomeNavBarComponent,
    DashBoardComponent,
    EmployeeDisplayComponent,
    AddEmployeeComponent,
    AccountDisplayComponent,
    AddAccountComponent,
    TimesheetComponent,
    TimedisplayComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
