import { Component, OnInit } from '@angular/core';
import { GridColumnDataType, IgxPivotDateDimension, IgxPivotNumericAggregate } from '@infragistics/igniteui-angular';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-pivot-grid',
  templateUrl: './pivot-grid.component.html',
  styleUrls: ['./pivot-grid.component.scss']
})
export class PivotGridComponent implements OnInit {
  public dateDimension = new IgxPivotDateDimension({
    memberName: 'Date',
    enabled: true
  }, {
    months: false,
    quarters: true,
    years: true
  });
  public pivotConfigHierarchy = {
    columns: [
      {
        memberName: 'Country',
        enabled: true
      },
      {
        memberName: 'Product',
        enabled: true
      }
    ],
    rows: [
      this.dateDimension,
    ],
    values: [
      {
        member: 'Sales',
        aggregate: {
          aggregator: IgxPivotNumericAggregate.sum,
          key: 'Sum Of Sales',
          label: 'Sum'
        },
        enabled: false,
        dataType: GridColumnDataType.Currency
      },
      {
        member: 'Profit',
        aggregate: {
          aggregator: IgxPivotNumericAggregate.sum,
          key: 'Sum Of Profit',
          label: 'Sum'
        },
        enabled: true,
        dataType: GridColumnDataType.Currency
      }
    ],
    filters: [
      {
        memberName: 'MonthName',
        enabled: false
      }
    ]
  };
  public financialSales: any = null;

  constructor(
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.financialService.getData('SalesType').subscribe(data => this.financialSales = data);
  }
}
