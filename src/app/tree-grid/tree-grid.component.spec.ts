import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TreeGridComponent } from './tree-grid.component';

describe('TreeGridComponent', () => {
  let component: TreeGridComponent;
  let fixture: ComponentFixture<TreeGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeGridComponent ],
      imports: [ NoopAnimationsModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
