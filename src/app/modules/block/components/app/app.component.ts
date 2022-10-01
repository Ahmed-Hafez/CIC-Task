import { EmployeeService } from './../../../core/services/employee/employee.service';
import { Component, OnInit } from '@angular/core';
import { concatMap, interval, take, tap, timer } from 'rxjs';
import { Employee } from 'src/app/models/business/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
