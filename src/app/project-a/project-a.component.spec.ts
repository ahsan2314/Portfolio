import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAComponent } from './project-a.component';

describe('ProjectAComponent', () => {
  let component: ProjectAComponent;
  let fixture: ComponentFixture<ProjectAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
