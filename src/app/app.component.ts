import { Component } from '@angular/core';
import { DisplayDensity, DisplayDensityToken } from '@infragistics/igniteui-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: DisplayDensity.cosy } }],
})
export class AppComponent {
}
