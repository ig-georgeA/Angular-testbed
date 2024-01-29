import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EmployeeDto } from '../models/northwind-apiv2/employee-dto';
import { EmployeesType } from '../models/northwind/employees-type';
import { NorthwindAPIv2Service } from '../services/northwind-apiv2.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-lists-data',
  templateUrl: './lists-data.component.html',
  styleUrls: ['./lists-data.component.scss']
})
export class ListsDataComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindAPIv2EmployeeDto: EmployeeDto[] = [];
  public northwindEmployees: EmployeesType[] = [];

  constructor(
    private northwindAPIv2Service: NorthwindAPIv2Service,
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindAPIv2Service.getEmployeeDtoList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindAPIv2EmployeeDto = data,
      error: (_err: any) => this.northwindAPIv2EmployeeDto = []
    });
    this.northwindService.getData('EmployeesType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindEmployees = data,
      error: (_err: any) => this.northwindEmployees = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
