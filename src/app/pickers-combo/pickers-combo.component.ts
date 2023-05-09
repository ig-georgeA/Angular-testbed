import { Component, OnInit } from '@angular/core';
import { IGNorthwindAPIService } from '../services/ignorthwind-api.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-pickers-combo',
  templateUrl: './pickers-combo.component.html',
  styleUrls: ['./pickers-combo.component.scss']
})
export class PickersComboComponent implements OnInit {
  public northwindEmployees: any = null;
  public iGNorthwindAPICustomerInputModel: any = null;

  constructor(
    private northwindService: NorthwindService,
    private iGNorthwindAPIService: IGNorthwindAPIService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
    this.iGNorthwindAPIService.getCustomerInputModel().subscribe(data => this.iGNorthwindAPICustomerInputModel = data);
  }
}
