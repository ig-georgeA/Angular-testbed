import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxCardModule, IgxListModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxListModule, IgxAvatarModule } from '@infragistics/igniteui-angular';
import { ListsDataComponent } from './lists-data.component';

describe('ListsDataComponent', () => {
  let component: ListsDataComponent;
  let fixture: ComponentFixture<ListsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsDataComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxCardModule, IgxListModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxListModule, IgxAvatarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
