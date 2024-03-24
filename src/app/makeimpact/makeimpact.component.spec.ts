import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeimpactComponent } from './makeimpact.component';

describe('MakeimpactComponent', () => {
  let component: MakeimpactComponent;
  let fixture: ComponentFixture<MakeimpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeimpactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeimpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
