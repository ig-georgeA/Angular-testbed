import { Component, OnDestroy, OnInit } from '@angular/core';
import { IRowSelectionEventArgs } from '@infragistics/igniteui-angular';
import { Subject, take, takeUntil } from 'rxjs';
import { ProductDto } from '../models/northwind-apiv2/product-dto';
import { CustomerDto } from '../models/northwind-apiv2/customer-dto';
import { OrderDto } from '../models/northwind-apiv2/order-dto';
import { NorthwindAPIv2Service } from '../services/northwind-apiv2.service';

@Component({
  selector: 'app-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.scss']
})
export class RouteDetailsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public selectedCustomer?: CustomerDto;
  public selectedCustomer$: Subject<void> = new Subject<void>();


  private _varOrderID?: number;
  public get varOrderID(): number | undefined {
    return this._varOrderID;
  }
  public set varOrderID(value: number | undefined) {
    this._varOrderID = value;
    this.northwindAPIv2ProductDto$.next();
  }

  private _rCustomerID?: string = 'ALFKI';
  public get rCustomerID(): string | undefined {
    return this._rCustomerID;
  }
  public set rCustomerID(value: string | undefined) {
    this._rCustomerID = value;
    this.selectedCustomer$.next();
    this.northwindAPIv2OrderDto$.next();
  }
  public singleSelectComboVisible: boolean = false;
  public avatarVisible: boolean = false;
  public northwindAPIv2OrderDto: OrderDto[] = [];
  public northwindAPIv2OrderDto$: Subject<void> = new Subject<void>();

  public northwindAPIv2ProductDto: ProductDto[] = [];
  public northwindAPIv2ProductDto$: Subject<void> = new Subject<void>();


  constructor(
    private northwindAPIv2Service: NorthwindAPIv2Service,
  ) {}

  ngOnInit() {
    this.northwindAPIv2Service.getCustomerDto(this.rCustomerID as any).pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.selectedCustomer = data,
      error: (_err: any) => this.selectedCustomer = undefined
    });
    this.selectedCustomer$.pipe(takeUntil(this.destroy$)).subscribe(
      () => this.northwindAPIv2Service.getCustomerDto(this.rCustomerID as any).pipe(take(1)).subscribe({
        next: (data) => this.selectedCustomer = data,
        error: (_err: any) => this.selectedCustomer = undefined
    }));
    this.northwindAPIv2Service.getOrderDtoList(this.rCustomerID as any).pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindAPIv2OrderDto = data,
      error: (_err: any) => this.northwindAPIv2OrderDto = []
    });
    this.northwindAPIv2OrderDto$.pipe(takeUntil(this.destroy$)).subscribe(
      () => this.northwindAPIv2Service.getOrderDtoList(this.rCustomerID as any).pipe(take(1)).subscribe({
        next: (data) => this.northwindAPIv2OrderDto = data,
        error: (_err: any) => this.northwindAPIv2OrderDto = []
    }));
    this.northwindAPIv2Service.getProductDtoList(this.varOrderID as any).pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindAPIv2ProductDto = data,
      error: (_err: any) => this.northwindAPIv2ProductDto = []
    });
    this.northwindAPIv2ProductDto$.pipe(takeUntil(this.destroy$)).subscribe(
      () => this.northwindAPIv2Service.getProductDtoList(this.varOrderID as any).pipe(take(1)).subscribe({
        next: (data) => this.northwindAPIv2ProductDto = data,
        error: (_err: any) => this.northwindAPIv2ProductDto = []
    }));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.selectedCustomer$.complete();
    this.northwindAPIv2OrderDto$.complete();
    this.northwindAPIv2ProductDto$.complete();
    this.destroy$.complete();
  }

  public gridRowSelectionChanging(event: IRowSelectionEventArgs) {
    this.varOrderID = event.newSelection[0]?.orderId as number;
  }
}
