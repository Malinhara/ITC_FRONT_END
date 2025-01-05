import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResultinquireComponent } from './student-resultinquire.component';

describe('StudentResultinquireComponent', () => {
  let component: StudentResultinquireComponent;
  let fixture: ComponentFixture<StudentResultinquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentResultinquireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentResultinquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
