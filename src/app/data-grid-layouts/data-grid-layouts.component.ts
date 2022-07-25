import { Component, OnInit } from '@angular/core';
import { NorthwindJasonService } from '../services/northwind-jason.service';
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
    private northwindJasonService: NorthwindJasonService,
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
    this.northwindJasonService.getApiCustomers().subscribe(data => this.northwindJasonApiCustomers = data);
  }
}
