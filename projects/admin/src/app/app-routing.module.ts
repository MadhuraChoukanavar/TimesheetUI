import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { EmployeeDisplayComponent } from './employee-display/employee-display.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AccountDisplayComponent } from './account-display/account-display.component';
import { AddAccountComponent } from './add-account/add-account.component';

import { ViewProfileComponent } from './view-profile/view-profile.component';


import { TimesheetComponent } from './timesheet/timesheet.component';
import { TimedisplayComponent } from './timedisplay/timedisplay.component';




const routes: Routes = [
<<<<<<< HEAD
 
  { path:'login',component: LoginPageComponent },
  {path:'dashboard',component:DashBoardComponent},
  {path:'employeedisplay',component:EmployeeDisplayComponent},
  {path:'addemployee',component:AddEmployeeComponent},
=======

  { path: 'login', component: LoginPageComponent },
  {path:'dashboard',component:DashBoardComponent},
  {path:'employeedisplay',component:EmployeeDisplayComponent},

  {path:'addemployee',component:AddEmployeeComponent},

 {path:'addemployee',component:AddEmployeeComponent},

>>>>>>> e4d16d1883385f2176f481207501d4a47ae71106
  {path:'accountdisplay',component:AccountDisplayComponent},
  {path:'addaccount',component:AddAccountComponent},
  {path:'timesheet',component:TimesheetComponent},
  {path:'timedisplay',component:TimedisplayComponent},
  {path:'',component:HomePageComponent},
 
  { path:'**', component: HomePageComponent },
<<<<<<< HEAD
  
=======
  { path: 'view-profile', component: ViewProfileComponent },
>>>>>>> e4d16d1883385f2176f481207501d4a47ae71106
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
