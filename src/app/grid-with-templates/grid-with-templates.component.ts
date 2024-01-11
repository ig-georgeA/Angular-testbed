import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EmployeeDto } from '../models/northwind-apiv2/employee-dto';
import { NorthwindAPIv2Service } from '../services/northwind-apiv2.service';

@Component({
  selector: 'app-grid-with-templates',
  templateUrl: './grid-with-templates.component.html',
  styleUrls: ['./grid-with-templates.component.scss']
})
export class GridWithTemplatesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindAPIv2EmployeeDto: EmployeeDto[] = [];

  constructor(
    private northwindAPIv2Service: NorthwindAPIv2Service,
  ) {}

  ngOnInit() {
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
