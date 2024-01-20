import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoderoomComponent } from './coderoom.component';

describe('CoderoomComponent', () => {
  let component: CoderoomComponent;
  let fixture: ComponentFixture<CoderoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoderoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoderoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
