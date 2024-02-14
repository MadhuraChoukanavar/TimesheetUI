import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

<<<<<<< HEAD
  private apiUrl = 'http://localhost:8081'; //actual API URL
=======
  private apiUrl = 'http://localhost:8081'; // Replace with your actual API URL
>>>>>>> e4d16d1883385f2176f481207501d4a47ae71106

  constructor(private http: HttpClient) {}

  getEmployees():Observable<Employee[]>{
<<<<<<< HEAD
    return this.http.get<Employee[]>(`${this.apiUrl}/employee/fetch`); 
=======
    return this.http.get<Employee[]>(`${this.apiUrl}/employee/fetch`); //=============
>>>>>>> e4d16d1883385f2176f481207501d4a47ae71106

   }

  saveEmployee(employeeData: Employee): Observable<Employee> {
<<<<<<< HEAD
    return this.http.post<Employee>(`${this.apiUrl}/api/employee/save`, employeeData);
=======
    console.log(employeeData+"service method");
    return this.http.post<Employee>(`${this.apiUrl}/employee/save`, employeeData);
>>>>>>> e4d16d1883385f2176f481207501d4a47ae71106
  }
}
