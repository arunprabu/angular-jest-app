import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartsDemoComponent } from './highcharts-demo.component';

describe('HighchartsDemoComponent', () => {
  let component: HighchartsDemoComponent;
  let fixture: ComponentFixture<HighchartsDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighchartsDemoComponent]
    });
    fixture = TestBed.createComponent(HighchartsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
