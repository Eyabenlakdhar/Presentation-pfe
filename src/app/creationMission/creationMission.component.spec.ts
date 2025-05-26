import { ComponentFixture, TestBed } from '@angular/core/testing';

import { creationMissionComponent } from './creationMission.component';

describe('creationMissionComponent', () => {
  let component: creationMissionComponent;
  let fixture: ComponentFixture<creationMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [creationMissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(creationMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
