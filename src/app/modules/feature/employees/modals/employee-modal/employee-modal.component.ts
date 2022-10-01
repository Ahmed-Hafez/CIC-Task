import { ModalStatus } from '../../../../../enums/modal-status.enum';
import { EmployeeModuleService } from './../../services/employee-module.service';
import { IUpdate } from './../../../../core/abstract/interfaces/update.interface';
import { ICreate } from './../../../../core/abstract/interfaces/create.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/business/employee.model';

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.scss'],
})
export class EmployeeModalComponent
  implements OnInit, ICreate<Employee, Employee>, IUpdate<Employee, Employee>
{
  readonly form: FormGroup;
  employee: Employee | undefined;

  subscription: Subscription | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { employee: Employee },
    public dialogRef: MatDialogRef<EmployeeModalComponent>,
    private employeeModuleService: EmployeeModuleService,
    private fb: FormBuilder
  ) {
    this.form = this.initializeForm();
  }

  ngOnInit(): void {
    this.initializeFormValues();
  }

  create(employee: Employee): Observable<Employee> {
    return this.employeeModuleService.create(employee);
  }

  update(employee: Employee): Observable<Employee> {
    return this.employeeModuleService.update(employee);
  }

  onAddBtnClicked(): void {
    this.subscription = this.create(this.form.value).subscribe({
      next: () => {
        this.subscription = undefined;
        this.dialogRef.close(ModalStatus.Success);
      },
      error: () => {
        this.subscription = undefined;
        this.dialogRef.close(ModalStatus.Fail);
      },
    });
  }

  onEditBtnClicked(): void {
    this.subscription = this.update({
      id: this.employee?.id,
      ...this.form.value,
    }).subscribe({
      next: () => {
        this.subscription = undefined;
        this.dialogRef.close(ModalStatus.Success);
      },
      error: () => {
        this.subscription = undefined;
        this.dialogRef.close(ModalStatus.Fail);
      },
    });
  }

  cancel(): void {
    this.dialogRef.close(ModalStatus.Cancel);
  }

  private initializeFormValues(): void {
    this.employee = this.data?.employee;
    if (this.employee) {
      this.form.patchValue(this.employee);
    }
  }

  private initializeForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      salary: ['', Validators.required],
      age: ['', Validators.required],
    });
  }
}
