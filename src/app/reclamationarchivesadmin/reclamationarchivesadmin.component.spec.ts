import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationarchivesadminComponent } from './reclamationarchivesadmin.component';

describe('ReclamationarchivesadminComponent', () => {
  let component: ReclamationarchivesadminComponent;
  let fixture: ComponentFixture<ReclamationarchivesadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReclamationarchivesadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReclamationarchivesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
