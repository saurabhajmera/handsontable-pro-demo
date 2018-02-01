import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotTableComponent } from './hot-table.component';

describe('HotTableComponent', () => {
  let component: HotTableComponent;
  let fixture: ComponentFixture<HotTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
