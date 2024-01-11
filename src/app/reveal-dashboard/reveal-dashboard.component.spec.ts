import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevealDashboardComponent } from './reveal-dashboard.component';

describe('RevealDashboardComponent', () => {
  let component: RevealDashboardComponent;
  let fixture: ComponentFixture<RevealDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevealDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevealDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
