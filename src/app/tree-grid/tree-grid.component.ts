import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss']
})
export class TreeGridComponent implements OnInit {
  public northwindEmployees: any = null;

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
  }
}
