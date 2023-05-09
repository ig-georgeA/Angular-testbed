import { Component } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent {
  public date = new Date('2021-03-01T00:00');
  public date1 = new Date('2021-03-27T00:00');
  public date2 = new Date('2021-03-16T00:00');
  public date3: any;
  public value = 'some content';
  public value1 = '0';
}
