import { Component, OnInit } from '@angular/core';
import { FinancialService } from '../services/financial.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-tab-layout',
  templateUrl: './tab-layout.component.html',
  styleUrls: ['./tab-layout.component.scss']
})
export class TabLayoutComponent implements OnInit {
  public northwindCustomers: any = null;
  public northwindEmployees: any = null;
  public financialBoxOfficeRevenue: any = null;

  constructor(
    private northwindService: NorthwindService,
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('CustomersType').subscribe(data => this.northwindCustomers = data);
    this.northwindService.getData('EmployeesType').subscribe(data => this.northwindEmployees = data);
    this.financialService.getData('BoxOfficeRevenueType').subscribe(data => this.financialBoxOfficeRevenue = data);
  }
}
