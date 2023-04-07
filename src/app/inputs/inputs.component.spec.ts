import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxInputGroupModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxDateTimeEditorModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxDatePickerModule, IgxInputGroupModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxIconModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxIconModule, IgxSliderModule, IgxSliderModule, IgxSliderModule, IgxSliderModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxDatePickerModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxSwitchModule, IgxSwitchModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxRadioModule, IgxRadioModule, IgxRadioModule, IgxRadioModule, IgxRadioModule, IgxRadioModule, IgxRadioModule, IgxRadioModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxIconModule, IgcFormsModule } from '@infragistics/igniteui-angular';
import { InputsComponent } from './inputs.component';

describe('InputsComponent', () => {
  let component: InputsComponent;
  let fixture: ComponentFixture<InputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxInputGroupModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxDateTimeEditorModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxDatePickerModule, IgxInputGroupModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxIconModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxIconModule, IgxSliderModule, IgxSliderModule, IgxSliderModule, IgxSliderModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxDatePickerModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxSwitchModule, IgxSwitchModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxRadioModule, IgxRadioModule, IgxRadioModule, IgxRadioModule, IgxRadioModule, IgxRadioModule, IgxRadioModule, IgxRadioModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxIconModule, IgcFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
