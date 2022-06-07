import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxComboModule, IgxDropDownModule, IgxButtonModule, IgxRippleModule, IgxToggleModule } from 'igniteui-angular';
import { PickersComboComponent } from './pickers-combo.component';

describe('PickersComboComponent', () => {
  let component: PickersComboComponent;
  let fixture: ComponentFixture<PickersComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickersComboComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxComboModule, IgxDropDownModule, IgxButtonModule, IgxRippleModule, IgxToggleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickersComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
