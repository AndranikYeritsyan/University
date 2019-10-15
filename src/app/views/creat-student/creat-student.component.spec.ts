import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatStudentComponent } from './creat-student.component';

describe('CreatStudentComponent', () => {
  let component: CreatStudentComponent;
  let fixture: ComponentFixture<CreatStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
