import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EmployeeDto } from '../models/northwind-apiv2/employee-dto';
import { CustomerDto } from '../models/northwind-apiv2/customer-dto';
import { NorthwindAPIv2Service } from '../services/northwind-apiv2.service';

@Component({
  selector: 'app-grid-and-tree-grid',
  templateUrl: './grid-and-tree-grid.component.html',
  styleUrls: ['./grid-and-tree-grid.component.scss']
})
export class GridAndTreeGridComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindAPIv2CustomerDto: CustomerDto[] = [];
  public northwindAPIv2EmployeeDto: EmployeeDto[] = [];

  constructor(
    private northwindAPIv2Service: NorthwindAPIv2Service,
  ) {}

  ngOnInit() {
    this.northwindAPIv2Service.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindAPIv2CustomerDto = data,
      error: (_err: any) => this.northwindAPIv2CustomerDto = []
    });
    this.northwindAPIv2Service.getEmployeeDtoList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindAPIv2EmployeeDto = data,
      error: (_err: any) => this.northwindAPIv2EmployeeDto = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
