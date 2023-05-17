import { Component, OnInit } from '@angular/core';
import { IGridEditDoneEventArgs, IRowDataEventArgs } from '@infragistics/igniteui-angular';
import { IGNorthwindAPIService } from '../services/ignorthwind-api.service';

@Component({
  selector: 'app-grid-crud',
  templateUrl: './grid-crud.component.html',
  styleUrls: ['./grid-crud.component.scss']
})
export class GridCRUDComponent implements OnInit {
  public iGNorthwindAPICustomerInputModel: any = null;

  constructor(
    private iGNorthwindAPIService: IGNorthwindAPIService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.iGNorthwindAPIService.getCustomerInputModel().subscribe(data => this.iGNorthwindAPICustomerInputModel = data);
  }

  public customerRowAdded(args: IRowDataEventArgs) {
    this.iGNorthwindAPIService.postCustomerInputModel(args.data).subscribe({
      next: (_e) => {
        this.iGNorthwindAPIService.getCustomerInputModel().subscribe(data => this.iGNorthwindAPICustomerInputModel = data);
      },
      error: (_err) => {
        // TODO: handle errors here.
      },
    });
  }

  public customerRowEditDone(args: IGridEditDoneEventArgs) {
    if(args.isAddRow == false) {
      this.iGNorthwindAPIService.putCustomerInputModel(args.rowData).subscribe({
        next: (_e) => {
          this.iGNorthwindAPIService.getCustomerInputModel().subscribe(data => this.iGNorthwindAPICustomerInputModel = data);
        },
        error: (_err) => {
          // TODO: handle errors here.
        },
      });
    }
  }

  public customerRowDeleted(args: IRowDataEventArgs) {
    this.iGNorthwindAPIService.deleteCustomerInputModel(args.primaryKey).subscribe({
      next: (_e) => {
        this.iGNorthwindAPIService.getCustomerInputModel().subscribe(data => this.iGNorthwindAPICustomerInputModel = data);
      },
      error: (_err) => {
        // TODO: handle errors here.
      },
    });
  }
}
