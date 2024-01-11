import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CustomerDto } from '../models/northwind-apiv2/customer-dto';
import { NorthwindAPIv2Service } from '../services/northwind-apiv2.service';

@Component({
  selector: 'app-dynamic-routing',
  templateUrl: './dynamic-routing.component.html',
  styleUrls: ['./dynamic-routing.component.scss']
})
export class DynamicRoutingComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindAPIv2CustomerDto: CustomerDto[] = [];

  constructor(
    private northwindAPIv2Service: NorthwindAPIv2Service,
  ) {}

  ngOnInit() {
    this.northwindAPIv2Service.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindAPIv2CustomerDto = data,
      error: (_err: any) => this.northwindAPIv2CustomerDto = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
