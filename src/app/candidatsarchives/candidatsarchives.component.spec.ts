import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatsarchivesComponent } from './candidatsarchives.component';

describe('CandidatsarchivesComponent', () => {
  let component: CandidatsarchivesComponent;
  let fixture: ComponentFixture<CandidatsarchivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidatsarchivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidatsarchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
