import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';

const sharedModules = [
  MatDialogModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  ReactiveFormsModule,
];

const otherSharedParts = [AlertModalComponent];

@NgModule({
  declarations: [otherSharedParts],
  imports: [CommonModule, ...sharedModules],
  exports: [...sharedModules, ...otherSharedParts],
})
export class SharedModule {}
