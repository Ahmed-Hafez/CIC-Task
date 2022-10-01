import { ICrud } from './../../../core/abstract/interfaces/crud.interface';
import { EmployeeService } from './../../../core/services/employee/employee.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/business/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeModuleService implements ICrud<Employee, Employee> {
  constructor(private employeeService: EmployeeService) {}

  create(employee: Employee): Observable<Employee> {
    return this.employeeService.createEmployee(employee);
  }

  readList(): Observable<Employee[]> {
    return this.employeeService.getAllEmployees();
  }

  readById(id: number): Observable<Employee> {
    return this.employeeService.getEmployee(id);
  }

  update(employee: Employee): Observable<Employee> {
    return this.employeeService.updateEmployee(employee);
  }

  delete(employeeId: number): Observable<{}> {
    return this.employeeService.deleteEmployee(employeeId);
  }
}
