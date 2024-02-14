import { Injectable } from "@angular/core";
import { Employee } from "./employee.model";
import { EmployeeserviceService } from "./employeeservice.service";




<<<<<<< HEAD

=======
>>>>>>> e4d16d1883385f2176f481207501d4a47ae71106
@Injectable({providedIn: 'root'})
export class EmployeeRepo{

  public employee:Employee[]=[];

  constructor(private dataSource:EmployeeserviceService) {
      this.getEmployees();
   }

  getEmployees(){
     this.dataSource.getEmployees().subscribe(data=>{
      this.employee=data;
    })
  }

  getEmployeeDetails():Employee[]{
    return this.employee;
  }

  sendEmployee(emp:Employee){
    this.dataSource.saveEmployee(emp).subscribe(
      (data)=>{
       console.log(data);
       this.resetForm();
     },
    (error)=>{
     console.error("error no data found");
    }
    )
  }

  resetForm(): void {
    // Implement code to reset form fields
  }

}
<<<<<<< HEAD
=======

>>>>>>> e4d16d1883385f2176f481207501d4a47ae71106
