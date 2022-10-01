import { Observable } from 'rxjs';
import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/business/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  readonly apiUrl: string = '/employees';

  constructor(private apiService: ApiService) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.apiService.get(`${this.apiUrl}`);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.apiService.get(`${this.apiUrl}/${id}`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.apiService.post<Employee, Employee>(`${this.apiUrl}`, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.apiService.put<Employee, Employee>(
      `${this.apiUrl}/${employee.id}`,
      employee
    );
  }

  deleteEmployee(employeeId: number): Observable<{}> {
    return this.apiService.delete(`${this.apiUrl}/${employeeId}`);
  }
}
