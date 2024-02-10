import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { EmployeeDisplayComponent } from './employee-display/employee-display.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AccountDisplayComponent } from './account-display/account-display.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { TimesheetComponent } from './timesheet/timesheet.component';



const routes: Routes = [
 
  { path: 'login', component: LoginPageComponent },
  {path:'dashboard',component:DashBoardComponent},
  {path:'employeedisplay',component:EmployeeDisplayComponent},
 {path:'addemployee',component:AddEmployeeComponent},
  {path:'accountdisplay',component:AccountDisplayComponent},
  {path:'addaccount',component:AddAccountComponent},
  {path:'timesheet',component:TimesheetComponent},
  { path:'', component: HomePageComponent },
  { path:'**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
