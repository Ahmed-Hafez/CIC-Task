import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesListComponent } from './pages/employees-list/employees-list.page';
import { EmployeeModalComponent } from './modals/employee-modal/employee-modal.component';
import { DeleteEmployeeModalComponent } from './modals/delete-employee-modal/delete-employee-modal.component';

@NgModule({
  declarations: [EmployeesListComponent, EmployeeModalComponent, DeleteEmployeeModalComponent],
  imports: [CommonModule, EmployeesRoutingModule, SharedModule],
})
export class EmployeesModule {}
