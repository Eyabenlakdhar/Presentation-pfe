import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIngArchivesComponent } from './dashboard-ing-archives.component';

describe('DashboardIngArchivesComponent', () => {
  let component: DashboardIngArchivesComponent;
  let fixture: ComponentFixture<DashboardIngArchivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardIngArchivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardIngArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
