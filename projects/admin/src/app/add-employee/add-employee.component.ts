import { Component } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeRepo } from '../../models/employee.repo';
import { EmployeeserviceService } from '../../models/employeeservice.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  public employee:any=Employee;
  
    emp:Employee=new Employee(0,'','','','','','','',0,'','',0,'','','','',0,'');
  
    constructor(private empService:EmployeeserviceService) { }
    SendEmployee(emp:any){
      console.log(emp);
      this.empService.saveEmployee(emp).subscribe(res=>this.employee=res);
      console.log("hiiiiii");
  
    }
  }

 


