import { EmployeeModalComponent } from './../../modals/employee-modal/employee-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { IRead } from './../../../../core/abstract/interfaces/read.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModuleService } from '../../services/employee-module.service';
import { Employee } from 'src/app/models/business/employee.model';
import { ModalStatus } from 'src/app/enums/modal-status.enum';
import { DeleteEmployeeModalComponent } from '../../modals/delete-employee-modal/delete-employee-modal.component';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.page.html',
  styleUrls: ['./employees-list.page.scss'],
})
export class EmployeesListComponent implements OnInit, IRead<Employee> {
  employeesList!: Employee[];

  constructor(
    private employeesModuleService: EmployeeModuleService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  readList(): Observable<Employee[]> {
    return this.employeesModuleService.readList();
  }

  readById(id: number): Observable<Employee> {
    throw new Error('Can not read employee data in this page.');
  }

  openAddEmployeeDialog(): void {
    this.dialog
      .open(EmployeeModalComponent)
      .afterClosed()
      .subscribe((status: ModalStatus) => {
        if (status === ModalStatus.Success) {
          this.getEmployees();
        }
      });
  }

  openEditEmployeeDialog(employee: Employee): void {
    this.dialog
      .open<EmployeeModalComponent, { employee: Employee }>(
        EmployeeModalComponent,
        {
          data: {
            employee,
          },
        }
      )
      .afterClosed()
      .subscribe((status: ModalStatus) => {
        if (status === ModalStatus.Success) {
          this.getEmployees();
        }
      });
  }

  openDeleteEmployeeDialog(employeeId: number): void {
    this.dialog
      .open<DeleteEmployeeModalComponent, { employeeId: number }>(
        DeleteEmployeeModalComponent,
        {
          data: {
            employeeId,
          },
        }
      )
      .afterClosed()
      .subscribe((status: ModalStatus) => {
        if (status === ModalStatus.Success) {
          this.getEmployees();
        }
      });
  }

  private getEmployees(): void {
    this.readList().subscribe((list) => (this.employeesList = list));
  }
}
