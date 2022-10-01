import { AuthGuard } from './../core/guards/auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'employees',
    loadChildren: () =>
      import('../feature/employees/employees.module').then(
        (m) => m.EmployeesModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('../auth/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'employees',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlockRoutingModule {}
