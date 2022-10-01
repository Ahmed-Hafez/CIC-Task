import { IDelete } from './../../../../core/abstract/interfaces/delete.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeModuleService } from '../../services/employee-module.service';
import { EmployeeModalComponent } from '../employee-modal/employee-modal.component';
import { Observable, Subscription } from 'rxjs';
import { ModalStatus } from 'src/app/enums/modal-status.enum';

@Component({
  selector: 'app-delete-employee-modal',
  templateUrl: './delete-employee-modal.component.html',
  styleUrls: ['./delete-employee-modal.component.scss'],
})
export class DeleteEmployeeModalComponent implements IDelete {
  subscription: Subscription | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { employeeId: number },
    public dialogRef: MatDialogRef<EmployeeModalComponent>,
    private employeeModuleService: EmployeeModuleService
  ) {}

  delete(id: number): Observable<{}> {
    return this.employeeModuleService.delete(id);
  }

  onDeleteBtnClicked(): void {
    this.delete(this.data.employeeId).subscribe({
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
}
