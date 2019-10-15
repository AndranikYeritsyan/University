import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatFacultiesComponent } from './creat-faculties.component';

describe('CreatFacultiesComponent', () => {
  let component: CreatFacultiesComponent;
  let fixture: ComponentFixture<CreatFacultiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatFacultiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatFacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
