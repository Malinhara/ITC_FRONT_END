import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursemoduleComponent } from './coursemodule.component';

describe('CoursemoduleComponent', () => {
  let component: CoursemoduleComponent;
  let fixture: ComponentFixture<CoursemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursemoduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
