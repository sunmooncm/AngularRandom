import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomchioceComponent } from './randomchioce.component';

describe('RandomchioceComponent', () => {
  let component: RandomchioceComponent;
  let fixture: ComponentFixture<RandomchioceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomchioceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomchioceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
