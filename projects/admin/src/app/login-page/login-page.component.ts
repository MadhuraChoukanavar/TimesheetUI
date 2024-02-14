import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  showDashboard: boolean = false;
   constructor()
   {}

  //  loginForm: FormGroup;
  //  userEmail: any;
  //  password: any;

  // constructor(private fb: FormBuilder, private employeeService: EmployeeserviceService , private router: Router) {
  //   this.loginForm = this.fb.group({
  //     userEmail:this.fb.control('0',[Validators.required]),
  //     password:this.fb.control( '0',[Validators.required]), 
  //   });
   
  // }

  // sendData(){
  //   console.log(this.loginForm)
  //   this.employeeService.login(this.loginForm).subscribe(
  //     (res)=>{
  //       console.log(res);
  //     }
  //   )
  // }

  // sendData(): void 
  // {
  //   console.log(this.loginForm)
  //   const { userEmail, password } = this.loginForm.value;

  //   this.employeeService.login(userEmail, password).subscribe(
  //     (response) => {
  //       console.log(response); // Handle successful login
  //       this.router.navigate(['/dashboard']);
  //     },
  //     (error) => {
  //       console.error(error); // Handle login error
  //     }
  //   );
  //   }
}
