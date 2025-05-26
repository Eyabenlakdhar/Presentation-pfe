import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationadminComponent } from './reclamationadmin.component';

describe('ReclamationadminComponent', () => {
  let component: ReclamationadminComponent;
  let fixture: ComponentFixture<ReclamationadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReclamationadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReclamationadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
