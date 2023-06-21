import { Component, OnInit } from '@angular/core';
import { IGridEditDoneEventArgs, IRowDataEventArgs } from '@infragistics/igniteui-angular';
import { IGNorthwindAPIService } from '../services/ignorthwind-api.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-grid-and-tree-grid',
  templateUrl: './grid-and-tree-grid.component.html',
  styleUrls: ['./grid-and-tree-grid.component.scss']
})
export class GridAndTreeGridComponent implements OnInit {
  public iGNorthwindAPIEmployeeInputModel: any = null;
  public northwindEmployees: any = null;

  constructor(
    private iGNorthwindAPIService: IGNorthwindAPIService,
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('EmployeesType').subscribe(data => this.northwindEmployees = data);
    this.iGNorthwindAPIService.getEmployeeInputModel().subscribe(data => this.iGNorthwindAPIEmployeeInputModel = data);
  }

  public employeeRowDeleted(args: IRowDataEventArgs) {
    this.iGNorthwindAPIService.deleteEmployeeInputModel(args.primaryKey).subscribe({
      next: (_e) => {
        this.iGNorthwindAPIService.getEmployeeInputModel().subscribe(data => this.iGNorthwindAPIEmployeeInputModel = data);
      },
      error: (_err) => {
        // TODO: handle errors here.
      },
    });
  }

  public employeeRowAdded(args: IRowDataEventArgs) {
    this.iGNorthwindAPIService.postEmployeeInputModel(args.data).subscribe({
      next: (_e) => {
        this.iGNorthwindAPIService.getEmployeeInputModel().subscribe(data => this.iGNorthwindAPIEmployeeInputModel = data);
      },
      error: (_err) => {
        // TODO: handle errors here.
      },
    });
  }

  public employeeRowEditDone(args: IGridEditDoneEventArgs) {
    if(args.isAddRow == false) {
      this.iGNorthwindAPIService.putEmployeeInputModel(args.rowData).subscribe({
        next: (_e) => {
          this.iGNorthwindAPIService.getEmployeeInputModel().subscribe(data => this.iGNorthwindAPIEmployeeInputModel = data);
        },
        error: (_err) => {
          // TODO: handle errors here.
        },
      });
    }
  }
}
