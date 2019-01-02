import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputresultComponent } from './outputresult.component';

describe('OutputresultComponent', () => {
  let component: OutputresultComponent;
  let fixture: ComponentFixture<OutputresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
