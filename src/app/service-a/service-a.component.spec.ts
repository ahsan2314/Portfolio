import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAComponent } from './service-a.component';

describe('ServiceAComponent', () => {
  let component: ServiceAComponent;
  let fixture: ComponentFixture<ServiceAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
