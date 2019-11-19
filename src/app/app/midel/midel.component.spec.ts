import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidelComponent } from './midel.component';

describe('MidelComponent', () => {
  let component: MidelComponent;
  let fixture: ComponentFixture<MidelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
