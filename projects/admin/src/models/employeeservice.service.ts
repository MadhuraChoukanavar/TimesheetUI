import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private apiUrl = 'http://localhost:8081'; //actual API URL

  constructor(private http: HttpClient) {}

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiUrl}/employee/fetch`); 

   }

  saveEmployee(employeeData: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}/api/employee/save`, employeeData);
  }
}
