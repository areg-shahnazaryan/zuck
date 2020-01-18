import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodLuckComponent } from './good-luck.component';

describe('GoodLuckComponent', () => {
  let component: GoodLuckComponent;
  let fixture: ComponentFixture<GoodLuckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodLuckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodLuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
