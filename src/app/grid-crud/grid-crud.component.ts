import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGridEditDoneEventArgs, IRowDataEventArgs } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { CustomerDto } from '../models/northwind-apiv2/customer-dto';
import { NorthwindAPIv2Service } from '../services/northwind-apiv2.service';

@Component({
  selector: 'app-grid-crud',
  templateUrl: './grid-crud.component.html',
  styleUrls: ['./grid-crud.component.scss']
})
export class GridCRUDComponent implements OnInit, OnDestroy {
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

  public customersRowDeleted(args: IRowDataEventArgs) {
    this.northwindAPIv2Service.deleteCustomerDto(args.primaryKey).pipe(takeUntil(this.destroy$)).subscribe({
      next: (_e) => {
        this.northwindAPIv2Service.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe(data => this.northwindAPIv2CustomerDto = data);
      },
      error: (_err) => {
        // TODO: handle errors here.
      },
    });
  }

  public customersRowAdded(args: IRowDataEventArgs) {
    this.northwindAPIv2Service.postCustomerDto(args.data).pipe(takeUntil(this.destroy$)).subscribe({
      next: (_e) => {
        this.northwindAPIv2Service.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe(data => this.northwindAPIv2CustomerDto = data);
      },
      error: (_err) => {
        // TODO: handle errors here.
      },
    });
  }

  public customersRowEditDone(args: IGridEditDoneEventArgs) {
    if(args.isAddRow == false) {
      this.northwindAPIv2Service.putCustomerDto(args.rowData).pipe(takeUntil(this.destroy$)).subscribe({
        next: (_e) => {
          this.northwindAPIv2Service.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe(data => this.northwindAPIv2CustomerDto = data);
        },
        error: (_err) => {
          // TODO: handle errors here.
        },
      });
    }
  }
}
