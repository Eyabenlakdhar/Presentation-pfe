import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIngComponent } from './dashboard-ing.component';

describe('DashboardIngComponent', () => {
  let component: DashboardIngComponent;
  let fixture: ComponentFixture<DashboardIngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardIngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardIngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
