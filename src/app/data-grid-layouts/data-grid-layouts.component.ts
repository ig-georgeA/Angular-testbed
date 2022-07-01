import { Component, OnInit } from '@angular/core';
import { Northwind_JasonService } from '../services/northwind_jason.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-data-grid-layouts',
  templateUrl: './data-grid-layouts.component.html',
  styleUrls: ['./data-grid-layouts.component.scss']
})
export class DataGridLayoutsComponent implements OnInit {
  public northwindJasonApiCustomers: any = null;
  public northwindEmployees: any = null;

  constructor(
    private northwind_JasonService: Northwind_JasonService,
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
    this.northwind_JasonService.getApiCustomers().subscribe(data => this.northwindJasonApiCustomers = data);
  }
}
