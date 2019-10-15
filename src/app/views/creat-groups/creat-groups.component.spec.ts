import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatGroupsComponent } from './creat-groups.component';

describe('CreatGroupsComponent', () => {
  let component: CreatGroupsComponent;
  let fixture: ComponentFixture<CreatGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
