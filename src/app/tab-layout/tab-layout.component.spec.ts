import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxTabsModule, IgxIconModule, IgxIconModule, IgxTabsModule, IgxTabsModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxTabsModule, IgxTabsModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCalendarModule, IgxTabsModule, IgxInputGroupModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxGridModule, IgxIconModule, IgxGridModule, IgxIconModule, IgxGridModule, IgxIconModule, IgxCardModule, IgxIconModule, IgxIconModule, IgxCategoryChartModule } from '@infragistics/igniteui-angular';
import { TabLayoutComponent } from './tab-layout.component';

describe('TabLayoutComponent', () => {
  let component: TabLayoutComponent;
  let fixture: ComponentFixture<TabLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabLayoutComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxTabsModule, IgxIconModule, IgxIconModule, IgxTabsModule, IgxTabsModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxTabsModule, IgxTabsModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCalendarModule, IgxTabsModule, IgxInputGroupModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxGridModule, IgxIconModule, IgxGridModule, IgxIconModule, IgxGridModule, IgxIconModule, IgxCardModule, IgxIconModule, IgxIconModule, IgxCategoryChartModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
