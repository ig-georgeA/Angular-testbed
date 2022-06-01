import { Component } from '@angular/core';

@Component({
  selector: 'app-card-calendar',
  templateUrl: './card-calendar.component.html',
  styleUrls: ['./card-calendar.component.scss']
})
export class CardCalendarComponent {
  public date = new Date('2022-05-18T00:00');
  public date1 = new Date('2022-01-17T00:00');
}
