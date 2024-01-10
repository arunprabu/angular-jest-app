import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterplotChartComponent } from './scatterplot-chart.component';

describe('ScatterplotChartComponent', () => {
  let component: ScatterplotChartComponent;
  let fixture: ComponentFixture<ScatterplotChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScatterplotChartComponent]
    });
    fixture = TestBed.createComponent(ScatterplotChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
