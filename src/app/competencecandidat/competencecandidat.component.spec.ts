import { ComponentFixture, TestBed } from '@angular/core/testing';

import { competencecandidatComponent } from './competencecandidat.component';

describe('competencecandidatComponent', () => {
  let component: competencecandidatComponent;
  let fixture: ComponentFixture<competencecandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [competencecandidatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(competencecandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
