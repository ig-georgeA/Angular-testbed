import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-pickers-combo',
  templateUrl: './pickers-combo.component.html',
  styleUrls: ['./pickers-combo.component.scss']
})
export class PickersComboComponent implements OnInit {
  public northwindEmployees: any = null;
  public northwindCustomers: any = null;
  public date: any;

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
    this.northwindService.getData('Customers').subscribe(data => this.northwindCustomers = data);
  }
}
