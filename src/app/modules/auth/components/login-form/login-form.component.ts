import { AlertModalComponent } from './../../../shared/components/alert-modal/alert-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from './../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    this.form = this.initializeForm();
  }

  ngOnInit(): void {}

  initializeForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login(): void {
    this.authService
      .login(this.form.value.email, this.form.value.password)
      .subscribe({
        error: () => this.openAuthFailedModal(),
      });
  }

  openAuthFailedModal(): void {
    this.dialog.open<AlertModalComponent, { title?: string; message: string }>(
      AlertModalComponent,
      {
        width: '300px',
        data: {
          message: 'Invalid email or password',
        },
      }
    );
  }
}
