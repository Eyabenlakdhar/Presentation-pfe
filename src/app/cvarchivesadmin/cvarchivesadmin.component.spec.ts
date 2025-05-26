import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvarchivesadminComponent } from './cvarchivesadmin.component';

describe('CvarchivesadminComponent', () => {
  let component: CvarchivesadminComponent;
  let fixture: ComponentFixture<CvarchivesadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CvarchivesadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CvarchivesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
