import { Component } from '@angular/core';
import { Employee } from '../../models/employee.model';
<<<<<<< HEAD
import { EmployeeRepo } from '../../models/employee.repo';
import { EmployeeserviceService } from '../../models/employeeservice.service';
=======

import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { EmployeeserviceService } from '../../models/employeeservice.service';
import { DatePipe } from '@angular/common';
>>>>>>> e4d16d1883385f2176f481207501d4a47ae71106

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

<<<<<<< HEAD
  public employee:any=Employee;
  
    emp:Employee=new Employee(0,'','','','','','','',0,'','',0,'','','','',0,'');
  
    constructor(private empService:EmployeeserviceService) { }
    SendEmployee(emp:any){
      console.log(emp);
      this.empService.saveEmployee(emp).subscribe(res=>this.employee=res);
      console.log("hiiiiii");
  
    }
  }

 


=======
public employee:any=Employee;

  // emp:Employee=new Employee(0,'','','','','','','',0,'','',0,'','','','',0,'');
  emp:Employee=new Employee(0,'','','','','','','',new Date(),0,'','',0,'',new Date(),'','','',0,new Date(),'',new Date());

  constructor(private empService:EmployeeserviceService) { }
  SendEmployee(emp:any){
    console.log(emp);
    this.empService.saveEmployee(emp).subscribe(res=>this.employee=res);
    console.log("hiiiiii");

  }
}


  // MyForm: FormGroup;           ,private fb: FormBuilder
  // emp:Employee=new Employee(0,'','','','','','','',"  ",0,'','',0,'',"  ",'','','',0,"   ",'',"  ");
  // ngOnInit() {
  //   this.MyForm = this.fb.group({
  //     createdOn: [new Date(), Validators.required],
  //     modifiedOn: [new Date(), Validators.required],
  //     exitDate: [new Date(), Validators.required],
  //     dateOfJoining: [new Date(), Validators.required]
  //   });
  // }

>>>>>>> e4d16d1883385f2176f481207501d4a47ae71106
