import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [LandingPageComponent, LoginFormComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
  exports: [LoginFormComponent],
})
export class AuthModule {}
