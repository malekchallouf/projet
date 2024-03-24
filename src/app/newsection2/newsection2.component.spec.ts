import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newsection2Component } from './newsection2.component';

describe('Newsection2Component', () => {
  let component: Newsection2Component;
  let fixture: ComponentFixture<Newsection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Newsection2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newsection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
