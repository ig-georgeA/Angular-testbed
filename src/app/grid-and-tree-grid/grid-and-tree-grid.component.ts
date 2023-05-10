import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-grid-and-tree-grid',
  templateUrl: './grid-and-tree-grid.component.html',
  styleUrls: ['./grid-and-tree-grid.component.scss']
})
export class GridAndTreeGridComponent implements OnInit {
  public northwindCustomers: any = null;
  public northwindEmployees: any = null;

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Customers').subscribe(data => this.northwindCustomers = data);
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
  }
}
