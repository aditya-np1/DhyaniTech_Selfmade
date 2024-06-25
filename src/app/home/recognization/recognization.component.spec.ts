import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognizationComponent } from './recognization.component';

describe('RecognizationComponent', () => {
  let component: RecognizationComponent;
  let fixture: ComponentFixture<RecognizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecognizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecognizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
