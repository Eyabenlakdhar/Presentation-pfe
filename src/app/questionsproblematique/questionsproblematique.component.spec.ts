import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsproblematiqueComponent } from './questionsproblematique.component';

describe('QuestionsproblematiqueComponent', () => {
  let component: QuestionsproblematiqueComponent;
  let fixture: ComponentFixture<QuestionsproblematiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionsproblematiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionsproblematiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
