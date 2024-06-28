import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerVersionsCardComponent } from './controller-versions-card.component';

describe('ControllerVersionsCardComponent', () => {
  let component: ControllerVersionsCardComponent;
  let fixture: ComponentFixture<ControllerVersionsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllerVersionsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllerVersionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
